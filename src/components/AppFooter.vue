<template>
  <footer class="app-footer red-pattern paper-edge">
    <div class="container footer-grid">
      <div>
        <h2>福建剪纸文化</h2>
        <p>以一纸一剪，见山海闽韵；以非遗传承，续千年乡愁。</p>
      </div>
      <div>
        <h3>资料参考</h3>
        <a href="https://www.fujian.gov.cn/zwgk/ztzl/sxzygwzxsgzx/sdjj/wvjj/202311/t20231101_6288806.htm" target="_blank" rel="noreferrer">福建省人民政府：福建剪纸“花样”万千</a>
        <a href="https://www.ihchina.cn/" target="_blank" rel="noreferrer">中国非物质文化遗产网</a>
      </div>
    </div>
    <p class="copyright">© 2026 福建剪纸文化展示站 · 非遗数字传播示范页面</p>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: 80px;
  padding: 64px 0 28px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
}

h2,
h3 {
  margin: 0 0 16px;
  font-family: var(--font-title);
  letter-spacing: 0.12em;
}

h2 {
  font-size: 38px;
}

p,
a {
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.9;
}

a {
  display: block;
  margin: 8px 0;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.copyright {
  margin: 38px 0 0;
  text-align: center;
  font-size: 14px;
}

@media (max-width: 760px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
