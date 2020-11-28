<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard"> Dashboard </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact> Users </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink> Settings </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-0">
        <CToggler in-header @click="$store.commit('toggleAppDarkTheme')">
          <CIcon name="cil-contrast" size="sm" />
        </CToggler>
      </CHeaderNavItem>
      <CTheHeaderDropdownAlerts />
      <CTheHeaderDropdownTasks />
      <CTheHeaderDropdownEnvelope />
      <CTheHeaderDropdownAccnt />
      <CHeaderNavItem class="d-md-down-none mx-0">
        <CToggler in-header @click="$store.commit('toggleLeftidebarDesktop')">
          <CIcon name="cil-applications-settings" size="lg" />
        </CToggler>
      </CHeaderNavItem>
    </CHeaderNav>
    <CSubheader class="px-3 pt-3">
      <CContainer fluid>
        <form>
          <div class="form-group row mb-0">
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput> 
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>    
          </div>
          <div class="form-group row mb-0">
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput> 
            <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"
                      checked
                      shape="pill"
                      v-bind="labelIcon"
                      for="inputEmail3"              
                    />  
            <CInput
                      sm="9"
                      placeholder="Username"
                      ref="Username"
                      v-model="username"
                    >                    
            </CInput>
            <div class="btn-group">
            <CButton
                @click.prevent="myAlert()"
                type="button"
                size="sm"
                color="success"
                class="h-50 mr-2 mt-2 w-75"
              >
                חיפוש
              </CButton>    
            </div>
          </div>
        </form>
      </CContainer>
    </CSubheader>
  </CHeader>
</template>

<script>
import CTheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import CTheHeaderDropdownEnvelope from "./TheHeaderDropdownEnvelope";
import CTheHeaderDropdownAlerts from "./TheHeaderDropdownAlerts";
import CTheHeaderDropdownTasks from "./TheHeaderDropdownTasks";

export default {
  name: "TheHeader",
  data() {
    return {
      username: "",
      usernameSwitch: false,
      labelIcon: {
        labelOn: "\u2713",
        labelOff: "\u2715",
      },
      labelTxt: {
        labelOn: "פעיל",
        labelOff: "כבוי",
      },
    };
  },
  components: {
    CTheHeaderDropdownAccnt,
    CTheHeaderDropdownEnvelope,
    CTheHeaderDropdownAlerts,
    CTheHeaderDropdownTasks,
  },
  methods: {
    myAlert: function () {
      alert(this.username + " " + this.$refs.Username_switch.state);
    },
    changed: function (event) {
      alert("changed" + event);
    },
  },
};
</script>
