<template>
  <section class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 公司資訊 -->
        <div class="footer-company">
          <h1 class="company-name">沐霖實業有限公司</h1>
          <p class="copyright">© 2023~2025 Muulin Ind. Corp.</p>
        </div>

        <!-- 聯絡資訊 -->
        <div class="footer-info">
          <div class="info-group">
            <div class="info-item">
              <svg class="footer-icon" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>公司位置：新北市林口區源泉街39號</span>
            </div>
            <div class="info-item">
              <svg class="footer-icon" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>工廠位置：桃園市楊梅區環東路298巷125號1樓</span>
            </div>
          </div>
          <div class="info-group">
            <div class="info-item">
              <svg class="footer-icon" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                </path>
              </svg>
              <span>TEL: 02-2609-0532</span>
            </div>
            <div class="info-item">
              <svg class="footer-icon" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3z">
                </path>
              </svg>
              <span>TEL: 03-475-4051</span>
            </div>
          </div>
          <div class="info-group">
            <div class="info-item">
              <svg class="footer-icon" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                </path>
              </svg>
              <span>FAX: 02-2608-9230</span>
            </div>
            <div class="info-item">
              <svg class="footer-icon" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
              <span>muulin.service@msa.hinet.net</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MuulinFooter",
};
</script>

<style scoped>
.footer {
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-top: 1px solid #e5e7eb;
}


.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-company {
  flex: 1;
}

.company-name {
  font-size: 1.875rem;
  font-weight: 600;
  color: #1a1c1a;
  margin-bottom: 0.25rem;
}

.copyright {
  font-size: 0.875rem;
  color: #434842;
}

.footer-info {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #434842;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon,
.footer-icon {
  flex-shrink: 0;
  color: #4d6450;
}

/* 統一 SVG 樣式 */
.footer-icon {
  width: 20px;
  height: 20px;
  stroke: #4d6450;
  transition: stroke 0.3s ease;
}

.footer-icon:hover {
  stroke: #1a6932;
}

@media (min-width: 1024px) {
  info-group {
    flex: 1;
    min-width: 200px;
  }
}
</style>
