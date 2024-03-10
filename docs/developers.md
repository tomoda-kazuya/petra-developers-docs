---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://github.com/tomoda-kazuya.png',
    name: 'Kazuya Tomoda',
    title: 'Frontend Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/tomoda-kazuya' }
    ]
  },
  {
    avatar: 'https://github.com/purinAtype.png',
    name: 'Katsumi Tsuchiya',
    title: 'Firebase Advisor',
    links: [
      { icon: 'github', link: 'https://github.com/purinAtype' }
    ]
  }
]
// const partners = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Core Members</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <!-- <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>