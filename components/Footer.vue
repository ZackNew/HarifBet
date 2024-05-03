<template>
  <!-- mobile footer -->
  <div class="lg:tw-hidden">
    <q-list v-for="item in footerItems" bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        :label="item.title"
        class="tw-font-semibold"
      >
        <ul v-for="listItem in item.items">
          <li class="tw-font-semibold tw-my-2 tw-mx-6">
            <a :href="listItem.link">{{ listItem.item }}</a>
          </li>
        </ul>
      </q-expansion-item>
    </q-list>
  </div>
  <!-- Desktop Footer -->
  <div
    class="tw-hidden lg:tw-flex tw-justify-around tw-py-12 tw-bg-secondary-800 custom-container"
  >
    <div v-for="item in footerItems">
      <p
        class="tw-text-white tw-font-semibold tw-text-lg tw-border-b-4 tw-border-green-700 tw-max-w-min tw-whitespace-nowrap"
      >
        {{ item.title }}
      </p>
      <ul v-for="listItem in item.items">
        <li class="tw-font-semibold tw-my-2">
          <a :href="listItem.link">{{ listItem.item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const footerItems = [
  {
    title: "HarifBET",
    items: [
      {
        item: "About us",
        link: "#",
      },
      {
        item: "Terms and conditions",
        link: "#",
      },
      {
        item: "Affiliate program",
        link: "#",
      },
      {
        item: "become an agent",
        link: "#",
      },
      {
        item: "bet slip check",
        link: "#",
      },
      {
        item: "mobile version",
        link: "#",
      },
      {
        item: "payment methods",
        link: "#",
      },
      {
        item: "blog",
        link: "#",
      },
      {
        item: "contact methusods",
        link: "#",
      },
    ],
  },
  {
    title: "Betting",
    items: [
      {
        item: "Sports",
        link: "#",
      },
      {
        item: "Multi Live",
        link: "#",
      },
      {
        item: "Live",
        link: "#",
      },
      {
        item: "Numbers",
        link: "#",
      },
      {
        item: "Toto",
        link: "#",
      },
    ],
  },
  {
    title: "Games",
    items: [
      {
        item: "Casino",
        link: "#",
      },
      {
        item: "1XFGAMES",
        link: "#",
      },
      {
        item: "TV Games",
        link: "#",
      },
      {
        item: "Bingo",
        link: "#",
      },
      {
        item: "Bitcoin",
        link: "#",
      },
    ],
  },
  {
    title: "Statistics",
    items: [
      {
        item: "Statistics",
        link: "#",
      },
      {
        item: "Results",
        link: "#",
      },
    ],
  },
  {
    title: "Useful Links",
    items: [
      {
        item: "Terms of Service",
        link: "#",
      },
      {
        item: "Responsibilie Gaming",
        link: "#",
      },
      {
        item: "Self-Exclusion",
        link: "#",
      },
      {
        item: "Dispute Resolution",
        link: "#",
      },
      {
        item: "Anti-Money Laudering",
        link: "#",
      },
      {
        item: "Firness & RNG Testing Methods",
        link: "#",
      },
      {
        item: "KYC Policies",
        link: "#",
      },
      {
        item: "Privacy & Management of Persons",
        link: "#",
      },
      {
        item: "Accounts, Payouts & Bonuses",
        link: "#",
      },
    ],
  },
  {
    title: "Apps",
    items: [
      {
        item: "IOS",
        link: "#",
      },
      {
        item: "Android",
        link: "#",
      },
      {
        item: "Windows",
        link: "#",
      },
    ],
  },
];
</script>
