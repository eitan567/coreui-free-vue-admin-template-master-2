<template>
  <CDropdown
    inNav
    class="c-header-nav-items mr-3"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <CIcon name="cil-envelope-open" />
        <CBadge color="info" shape="pill">7</CBadge>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>You have 7 messages</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <div class="message text-right">
        <div class="pt-3 mr-3 float-left">
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
        <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
      </div>
    </CDropdownItem>
    <CDropdownItem>
      <div class="message text-right">
        <div class="pt-3 mr-3 float-left">
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
        <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
      </div>
    </CDropdownItem>
    <CDropdownItem>
      <div class="message text-right">
        <div class="pt-3 mr-3 float-left">
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
        <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
      </div>
    </CDropdownItem>
    <CDropdownItem>
      <div class="message text-right">
        <div class="pt-3 mr-3 float-left">
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
        <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
      </div>
    </CDropdownItem>
    <CDropdownItem class="border-top text-center">
      <strong>View all messages</strong>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: "TheHeaderDropdownEnvelope",
  data() {
    return {
      itemsCount: 42,
    };
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>