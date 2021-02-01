<template>
  <!-- Navbar-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container justify-content-between bg-light">
      <!-- Left elements -->
      <div class="d-flex">
        <!-- Brand -->
        <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
          <img
            src="../../../src/assets/images/logo.jpg"
            alt="avatar"
            loading="lazy"
            class="logo-avatar"
          />
        </a>

        <!-- Search form -->
        <form class="input-group w-auto my-auto d-none d-sm-flex">
          <input
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder="Search"
            style="min-width: 125px"
          />
        </form>
      </div>
      <!-- Left elements -->

      <!-- Right elements -->
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-3 me-lg-1">
          <a class="nav-link d-sm-flex align-items-sm-center" href="#">
            <img
              src="../../../src/assets/images/avatar.jpeg"
              class="rounded-circle"
              height="22"
              alt=""
              loading="lazy"
            />
            <strong class="d-none d-sm-block ms-1">ChienND</strong>
          </a>
        </li>
        <li class="nav-item me-3 me-lg-1">
          <a class="nav-link" href="#">
            <span><i class="fas fa-plus-circle fa-lg"></i></span>
          </a>
        </li>
        <li class="nav-item dropdown me-3 me-lg-1">
          <a
            class="navbar-brand me-2 mb-1 d-flex align-items-center text-nav"
            href="#"
          >
            HOME
          </a>
        </li>
        <li class="nav-item dropdown me-3 me-lg-1">
          <a
            class="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="#feature"
          >
            FEATURE
          </a>
        </li>
        <li class="nav-item dropdown me-3 me-lg-1">
          <a
            class="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="#favourite"
          >
            FAVOURITE
          </a>
        </li>
        <li class="nav-item dropdown me-3 me-lg-1">
          <a
            class="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
      <!-- Right elements -->
    </div>
  </nav>
  <!-- Navbar -->
</template>

<style lang="css">
.logo-avatar {
  width: 50px;
  height: 50px;
  margin-top: 2px;
  border-radius: 50%;
}
.rounded-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.navbar-brand {
  color: #007bff !important;
}
</style>