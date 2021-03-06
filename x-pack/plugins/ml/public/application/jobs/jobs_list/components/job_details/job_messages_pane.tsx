/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { FC, useCallback, useEffect, useState } from 'react';
import { i18n } from '@kbn/i18n';
import { ml } from '../../../../services/ml_api_service';
import { JobMessages } from '../../../../components/job_messages';
import { JobMessage } from '../../../../../../common/types/audit_message';
import { extractErrorMessage } from '../../../../../../common/util/errors';
import { useToastNotificationService } from '../../../../services/toast_notification_service';
interface JobMessagesPaneProps {
  jobId: string;
}

export const JobMessagesPane: FC<JobMessagesPaneProps> = ({ jobId }) => {
  const [messages, setMessages] = useState<JobMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const toastNotificationService = useToastNotificationService();

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      setMessages(await ml.jobs.jobAuditMessages(jobId));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toastNotificationService.displayErrorToast(
        error,
        i18n.translate('xpack.ml.jobService.jobAuditMessagesErrorTitle', {
          defaultMessage: 'Error loading job messages',
        })
      );

      setErrorMessage(extractErrorMessage(error));
    }
  };

  const refreshMessage = useCallback(fetchMessages, [jobId]);

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <JobMessages
      refreshMessage={refreshMessage}
      messages={messages}
      loading={isLoading}
      error={errorMessage}
    />
  );
};
