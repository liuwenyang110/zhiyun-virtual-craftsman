<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="四大流派" seal="派" desc="福建剪纸在山海之间分化出各具风骨的地方样式：漳浦重生活场景，柘荣见质朴灵秀，泉州以刻纸精工，浦城含闽越古韵。" />
      <div class="grid two">
        <SchoolCard v-for="school in schools" :key="school.id" :school="school" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import SchoolCard from '../components/SchoolCard.vue'
import { schools } from '../data/schools'
</script>
