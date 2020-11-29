<template>
  <CSidebar
    size="lg"
    color-scheme="light"
    overlaid
    aside
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarLeftShow', value])"
  >
    <CTabs
      :active-tab.sync="activeTab"
      class="nav-underline nav-underline-primary"
    >
      <CTab active>
        <template slot="title" class="h-50">
          <CIcon name="cil-calculator" />
        </template>
        <CListGroup class="list-group-accent">
          <CListGroupItem
            class="list-group-item-accent-light bg-light text-center font-weight-bold text-muted text-uppercase small border-bottom-0"
            >TODAY</CListGroupItem
          >
          <CListGroupItem
            href="#"
            class="list-group-item-accent-warning list-group-item-divider"
          >
            <div class="c-avatar float-right">
              <img
                src="img/avatars/7.jpg"
                alt="admin@bootstrapmaster.com"
                class="c-avatar-img"
              />
            </div>
            <div>פגישה עם <strong>אירינה</strong></div>
            <small class="text-muted ml-3">
              <CIcon name="cil-calculator" />
              איתן
            </small>
            <small class="text-muted">
              <CIcon name="cil-calculator" />
              ברון
            </small>
          </CListGroupItem>
          <CListGroupItem
            href="#"
            class="list-group-item-accent-info list-group-item-divider"
          >
            <div class="c-avatar float-right">
              <img
                src="img/avatars/4.jpg"
                alt="admin@bootstrapmaster.com"
                class="c-avatar-img"
              />
            </div>
            <div>פגישה עם <strong>אירינה</strong></div>
            <small class="text-muted ml-3">
              <CIcon name="cil-calculator" />
              איתן
            </small>
            <small class="text-muted">
              <CIcon name="cil-calculator" />
              ברון
            </small>
          </CListGroupItem>
          <CListGroupItem
            class="list-group-item-accent-light bg-light text-center font-weight-bold text-muted text-uppercase small border-bottom-0"
            >TOMORROW</CListGroupItem
          >
          <CListGroupItem
            href="#"
            class="list-group-item-accent-danger list-group-item-divider"
          >
            <div>פגישה עם <strong>אירינה</strong></div>
            <small class="text-muted ml-3">
              <CIcon name="cil-calculator" />
              איתן
            </small>
            <small class="text-muted">
              <CIcon name="cil-calculator" />
              ברון
            </small>
            <div class="c-avatars-stack mt-2">
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/2.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/3.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/4.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/5.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/6.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
            </div>
          </CListGroupItem>
          <CListGroupItem
            href="#"
            class="list-group-item-accent-success list-group-item-divider"
          >
            <div>פגישה עם <strong>אירינה</strong></div>
            <small class="text-muted ml-3">
              <CIcon name="cil-calculator" />
              איתן
            </small>
            <small class="text-muted">
              <CIcon name="cil-calculator" />
              ברון
            </small>
          </CListGroupItem>
          <CListGroupItem
            href="#"
            class="list-group-item-accent-primary list-group-item-divider"
          >
            <div>פגישה עם <strong>אירינה</strong></div>
            <small class="text-muted ml-3">
              <CIcon name="cil-calculator" />
              איתן
            </small>
            <small class="text-muted">
              <CIcon name="cil-calculator" />
              ברון
            </small>
            <div class="c-avatars-stack mt-2">
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/2.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/3.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/4.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/5.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/6.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/7.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
              <div class="c-avatar c-avatar-xs">
                <img
                  src="img/avatars/8.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                />
              </div>
            </div>
          </CListGroupItem>
        </CListGroup>
      </CTab>
      <CTab>
        <template slot="title">
          <CIcon name="cil-basket" />
        </template>
        <div class="p-3">          
          <div class="message">
            <div class="py-3 pb-5 ml-3 float-left">
              <div class="c-avatar">
                <img
                  src="img/avatars/7.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                /><span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small
              ><small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</small
            >
          </div>
          <hr />
          <div class="message">
            <div class="py-3 pb-5 ml-3 float-left">
              <div class="c-avatar">
                <img
                  src="img/avatars/7.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                /><span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small
              ><small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</small
            >
          </div>
          <hr />
          <div class="message">
            <div class="py-3 pb-5 ml-3 float-left">
              <div class="c-avatar">
                <img
                  src="img/avatars/7.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                /><span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small
              ><small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</small
            >
          </div>
          <hr />
          <div class="message">
            <div class="py-3 pb-5 ml-3 float-left">
              <div class="c-avatar">
                <img
                  src="img/avatars/7.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                /><span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small
              ><small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</small
            >
          </div>
          <hr />
          <div class="message">
            <div class="py-3 pb-5 ml-3 float-left">
              <div class="c-avatar">
                <img
                  src="img/avatars/7.jpg"
                  alt="admin@bootstrapmaster.com"
                  class="c-avatar-img"
                /><span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small
              ><small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</small
            >
          </div>
        </div>
      </CTab>
      <CTab>
        <template slot="title">
          <CIcon name="cil-chart-pie" />
        </template>
        <div class="p-3">
          <h6>Settings</h6>
          <div>
            <div class="clearfix mt-4">
              <small><b>Option 1</b></small>
              <CSwitch class="mx-1 float-right" color="success" size="sm" checked shape="pill" v-bind="labelTxt" />              
            </div>
            <div><small class="text-muted"></small></div>
          </div>
          <div>
            <div class="clearfix mt-3">
              <small><b>Option 2</b></small>
              <CSwitch class="mx-1 float-right" color="success" size="sm" shape="pill" v-bind="labelTxt" />              
            </div>
            <div>
              <small class="text-muted"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</small
              >
            </div>
          </div>
          <div>
            <div class="clearfix mt-3">
              <small><b>Option 3</b></small>
              <CSwitch class="mx-1 float-right" color="success" size="sm" disabled checked shape="pill" v-bind="labelTxt" />              
            </div>
            <div><small class="text-muted">Disabled option.</small></div>
          </div>
          <div>
            <div class="clearfix mt-3">
              <small><b>Option 4</b></small>
              <CSwitch class="mx-1 float-right" color="success" size="sm" checked shape="pill" v-bind="labelTxt" />              
            </div>
          </div>
          <hr />
          <h6>System Utilization</h6>
          <div class="text-uppercase mb-1 mt-4">
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="info" :value="25" />          
          <small class="text-muted">348 Processes. 1/4 Cores.</small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="warning" :value="70" />          
          <small class="text-muted">11444MB/16384MB</small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="danger" :value="95" />          
          <small class="text-muted">243GB/256GB</small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>SSD 2 Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="success" :value="10" />          
          <small class="text-muted">25GB/256GB</small>
        </div>
      </CTab>
    </CTabs>

    <CSidebarClose
      class="c-sidebar-close"
      style="height:37px !important"
      aria-label="Close"
      @click.native="$store.commit('set', ['sidebarLeftShow', !show])"
    />
  </CSidebar>
</template>

<script>
export default {
  name: "TheSidebarLeft",
  data() {
    return {
      activeTab: 0,
      colors: [
        'primary','secondary','warning','success','info','danger','light','dark'
      ],
      fields: [
        { key: 'size' },
        { key: 'example' },
        { key: 'size_prop', label: 'Size prop' }
      ],
      items: [
        {
          size: 'Large', 
          example: {  variant: '3d', color: 'primary', size: 'lg', checked: true }, 
          size_prop: 'Add following prop <code>size="lg"</code>'
        },
        {
          size: 'Normal', 
          example: {  variant: '3d', color: 'primary', size: '', checked: true }, 
          size_prop: '-'
        },
        {
          size: 'Small', 
          example: { variant: '3d', color: 'primary', size: 'sm', checked: true}, 
          size_prop: 'Add following prop <code>size="sm"</code>'
        }
      ],
      checker: true,
      radio: 'warning',
      labelIcon: {
        labelOn: '\u2713',
        labelOff: '\u2715'
      },
      labelTxt: {
        labelOn: 'פעיל',
        labelOff: 'כבוי'
      }
    }
  },
  computed: {
    show() {
      return this.$store.state.sidebarLeftShow;
    },
    close() {
      return this.$store.state.sidebarLeftClose;
    },
  },
};
</script>
