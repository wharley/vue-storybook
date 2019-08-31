/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Maintenance from '@/components/Maintenance.vue'

storiesOf('WidgetInfo', module)
  .add('With number and title', () => ({
    components: { Maintenance },
    template: '<Maintenance />'
  }))