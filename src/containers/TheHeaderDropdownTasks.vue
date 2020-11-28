<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    add-menu-classes="pt-0"
  >
    <template #toggler>     
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
          <CBadge color="warning" shape="pill">15</CBadge>
        </CHeaderNavLink>
      </CHeaderNavItem>
    </template>   
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Server</strong>
    </CDropdownHeader>
    <CDropdownItem class="d-block text-right">
      <div class="text-uppercase mb-1 mt-2">
          <small><b>Memory Usage</b></small>
      </div>
      <CProgress class="progress-xs" color="danger" :value="25" />          
      <small class="text-muted">348 Processes. 1/4 Cores.</small>
    </CDropdownItem>
    <CDropdownItem class="d-block text-right">
      <div class="text-uppercase mb-1 mt-2">
        <small><b>Memory Usage</b></small>
      </div>
      <CProgress class="progress-xs" color="info" :value="15" />          
      <small class="text-muted">348 Processes. 1/4 Cores.</small>
    </CDropdownItem>
    <CDropdownItem class="d-block text-right">
      <div class="text-uppercase mb-1 mt-2">
        <small><b>Memory Usage</b></small>
      </div>
      <CProgress class="progress-xs" color="warning" :value="55" />          
      <small class="text-muted">348 Processes. 1/4 Cores.</small>
    </CDropdownItem>     
     <CDropdownItem class="border-top text-center">
      <strong>View all messages</strong>
    </CDropdownItem>    
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAlerts',
  data () {
    return { 
      itemsCount: 42
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>