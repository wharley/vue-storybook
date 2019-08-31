/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MyModal from '../styleguide/MyModal.vue'

storiesOf('Modal', module)
  .add('Modal', () => ({
    components: { MyModal },
    template: '<my-modal />'
  }))