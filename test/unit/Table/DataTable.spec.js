import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { mount, createLocalVue } from '@vue/test-utils'
import DataTable from '@/components/Table/DataTable.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

Vue.use(Vuetify)

describe('Cards from Dashboard', () => {
  let wrapper, vuetify, mutations, store

  beforeEach(() => {
    mutations = {
      EDIT_PROJECT: jest.fn().mockName('projects/EDIT_PROJECT')
    }

    store = new Vuex.Store({ mutations })

    vuetify = new Vuetify({
      mocks: {
        $vuetify: {
          lang: {
            t: () => {}
          },
          theme: {
            dark: false,
            themes: {
              dark: {}
            }
          }
        }
      }
    })

    wrapper = mount(DataTable, {
      store,
      vuetify,
      localVue,
      data () {
        return {
          dialog: true,
          editedProject: {
            name: 'Tuğçe',
            deadline: '',
            progress: ''
          },
          tableHeader: [
            { text: 'Name', align: 'start', value: 'name' },
            { text: 'Deadline', value: 'deadline' },
            { text: 'Progress', value: 'progress' },
            { text: 'Actions', value: 'actions', align: 'center', sortable: false }
          ]
        }
      },
      computed: {
        projects () {
          return [
            {
              id: 0,
              name: 'Rest API',
              deadline: '2 Months Later',
              progress: '78',
              color: '#d47e21'
            },
            {
              id: 1,
              name: 'Database',
              deadline: '2 Weeks Later',
              progress: '14',
              color: '#b54d23'
            }
          ]
        }
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('dialog', async () => {
    wrapper.find('[data-test="dialog-close"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.dialog).toBeFalsy()

    wrapper.find('[data-test="dialog-save"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(mutations.EDIT_PROJECT).toHaveBeenCalled()
  })
})
