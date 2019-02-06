/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { i18n } from '@kbn/i18n';

export const NOTES_TOOLTIP = i18n.translate('xpack.secops.timeline.body.notes.tooltip', {
  defaultMessage: 'Add or view notes for this event',
});

export const COPY_TO_CLIPBOARD = i18n.translate('xpack.secops.timeline.body.copy.to.clipboard', {
  defaultMessage: 'Copy to Clipboard',
});

export const EVENT = i18n.translate('xpack.secops.timeline.body.event', {
  defaultMessage: 'Event',
});

export const UNPINNED = i18n.translate('xpack.secops.timeline.body.pinning.unpinnedTooltip', {
  defaultMessage: 'This is event is NOT persisted with the timeline',
});

export const PINNED = i18n.translate('xpack.secops.timeline.body.pinning.pinnnedTooltip', {
  defaultMessage: 'This event is persisted with the timeline',
});

export const PINNED_WITH_NOTES = i18n.translate(
  'xpack.secops.timeline.body.pinning.pinnnedWithNotesTooltip',
  {
    defaultMessage: 'This event cannot be unpinned because it has notes',
  }
);

export const EXPAND = i18n.translate('xpack.secops.timeline.body.actions.expand', {
  defaultMessage: 'Expand',
});

export const COLLAPSE = i18n.translate('xpack.secops.timeline.body.actions.collapse', {
  defaultMessage: 'Collapse',
});
