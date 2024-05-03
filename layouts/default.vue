<template>
  <div class="q-pa-md dark:tw-bg-secondary-900">
    <q-layout view="lHh lpr lFf" style="height: 400px">
      <q-header elevated class="tw-bg-secondary-800">
        <Header />
      </q-header>

      <q-footer elevated>
        <Footer />
      </q-footer>

      <q-page-container>
        <slot />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
.custom-container {
  max-width: 1800px;
  margin: auto;
}
</style>
