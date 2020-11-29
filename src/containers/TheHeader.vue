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
          <div class="form-group row  mb-0">    
            <b-form-checkbox
            id="checkbox-1"
            v-model="usernameSwitch"
            name="checkbox-1"
            size="lg"              
            class="success" 
          />               
            <!-- <CSwitch size="sm"
                      sm="3"
                      class="mx-2 pt-1"
                      color="success"                                            
                      shape="pill"
                      :checked="usernameSwitch"
                      v-bind="labelTxt"                      
                      for="inputEmail3"   
                      ref="Username_Switch"           
                    />   -->
            <CInput
                      sm="9"
                      placeholder="Username test"
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
                      placeholder="Username1"
                      ref="Username1"
                      v-model="username1"
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
                      placeholder="Username2"
                      ref="Username2"
                      v-model="username2"
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
                      placeholder="Username3"
                      ref="Username3"
                      v-model="username3"
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
                      placeholder="Username4"
                      ref="Username4"
                      v-model="username4"
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
                      placeholder="Username5"
                      ref="Username5"
                      v-model="username5"
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
                      placeholder="Username6"
                      ref="Username6"
                      v-model="username6"
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
                      placeholder="Username7"
                      ref="Username7"
                      v-model="username7"
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
                      placeholder="Username8"
                      ref="Username8"
                      v-model="username8"
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
                      placeholder="Username9"
                      ref="Username9"
                      v-model="username9"
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
      username1: "",
      username2: "",
      username3: "",
      username4: "",
      username5: "",
      username6: "",
      username7: "",
      username8: "",
      username9: "",
      username10: "",
      usernameSwitch: true,
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
    CTheHeaderDropdownTasks
  },
  methods: {
    myAlert: function () {
      //alert(this.username + " " + this.$refs.Username_Switch.state);
      alert(1);
    },
    changed: function (event) {
      alert("changed" + event);
    }
  },
};
</script>
