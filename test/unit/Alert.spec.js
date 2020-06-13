import Vue from 'vue'
import Vuetify from 'vuetify'

import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert.vue'

Vue.use(Vuetify)

describe('Alert', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Alert)
    expect(wrapper).toBeTruthy()
  })
})
