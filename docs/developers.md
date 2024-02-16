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
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/tomoda-kazuya' }
    ]
  },
  {
    avatar: 'https://github.com/hayashi-yu.png',
    name: 'Yuya Hayashi',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/hayashi-yu' }
    ]
  },
  {
    avatar: 'https://placehold.jp/150x150.png',
    name: 'Hiroaki Matsuura',
    title: 'Developer',
    // links: [
    //   { icon: 'github', link: 'https://github.com/tomoda-kazuya' }
    // ]
  },
  {
    avatar: 'https://github.com/HiroakiMuramatsu.png',
    name: 'Hiroaki Muramatsu',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/HiroakiMuramatsu' }
    ]
  },
  {
    avatar: 'https://github.com/Araiyu.png',
    name: 'Yusuke Arai',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Araiyu' }
    ]
  },
  {
    avatar: 'https://github.com/OnoderaYuki.png',
    name: 'Yuki Onodera',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/OnoderaYuki' }
    ]
  },
]
const partners = [
  {
    avatar: 'https://github.com/purinAtype.png',
    name: 'Katsumi Tsuchiya',
    title: 'Firebase Advisor',
    links: [
      { icon: 'github', link: 'https://github.com/purinAtype' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>