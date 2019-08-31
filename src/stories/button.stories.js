/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../styleguide/MyButton.vue'

storiesOf('Button', module)
  .add('Primary button', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Primary</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Secondary button', () => ({
    components: { MyButton },
    template: '<my-button btnType="secondary" @click="action">Secondary</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Success button', () => ({
    components: { MyButton },
    template: '<my-button btnType="success" @click="action">Success</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Danger button', () => ({
    components: { MyButton },
    template: '<my-button btnType="danger" @click="action">Danger</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Warning button', () => ({
    components: { MyButton },
    template: '<my-button btnType="warning" @click="action">Warning</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Info button', () => ({
    components: { MyButton },
    template: '<my-button btnType="info" @click="action">Info</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Light button', () => ({
    components: { MyButton },
    template: '<my-button btnType="light" @click="action">Light</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Dark button', () => ({
    components: { MyButton },
    template: '<my-button btnType="dark" @click="action">Dark</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('Link button', () => ({
    components: { MyButton },
    template: '<my-button btnType="link" @click="action">Link</my-button>',
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
