<template>
  <CDropdown
    inNav    
    class="c-header-nav-items mt-2"    
    add-menu-classes="pt-0"
  >    
    <template #toggler>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
          <CBadge color="danger" shape="pill">5</CBadge>
        </CHeaderNavLink>
      </CHeaderNavItem>
    </template> 
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>You have 5 notifications</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" class="text-success"/>  New user registered       
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" class="text-info"/>  New user registered       
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-task" class="text-danger"/>  New user registered       
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-comment-square" class="text-warning"/>  New user registered       
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-comment-square" class="text-primary"/>  New user registered       
    </CDropdownItem>
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
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownTasks',
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
