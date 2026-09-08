/* ============================================================================
   渲染与交互逻辑（一般不需要修改此文件；网站内容都在 content.js 里改）
   ============================================================================ */
(function () {
  "use strict";
  var D = SITE_DATA;

  /* ---------- 小工具 ---------- */
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // 作者列表中加粗 "Ou, Y."
  function markAuthor(s) {
    return esc(s).replace(/Ou, Y\./g, "<strong>Ou, Y.</strong>");
  }

  /* ---------- SVG 图标 ---------- */
  var ICONS = {
    email: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.11-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 3 1 9l4 2.18v6.32C5 19.05 8.13 21 12 21s7-1.95 7-3.5v-6.32L21.5 9.75 23 9 12 3zm5 14.5c0 .83-2.24 2.5-5 2.5s-5-1.67-5-2.5v-5.43l4.36 2.38a1.5 1.5 0 0 0 1.28 0L17 12.07v5.43z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.32H5.93V8.6h1.44v9.72zM6.65 7.79a.92.92 0 1 1 0-1.85.92.92 0 0 1 0 1.85zm5.9 10.53c-2.9 0-4.65-2.21-4.65-4.87 0-2.63 1.72-4.85 4.65-4.85 2.92 0 4.65 2.22 4.65 4.85 0 2.66-1.73 4.87-4.65 4.87zm0-8.35c-2.15 0-3.21 1.61-3.21 3.48 0 1.88 1.06 3.5 3.21 3.5 2.14 0 3.21-1.62 3.21-3.5 0-1.87-1.07-3.48-3.21-3.48z"/></svg>',
    huggingface: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/></svg>',
    researchgate: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    download: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19.5h16"/></svg>'
  };

  /* ---------- 渲染：左侧边栏 ---------- */
  function renderSidebar() {
    var p = D.profile, L = p.links;
    var linksHtml = "";
    if (L.email) linksHtml += '<a href="mailto:' + esc(L.email) + '" title="Email" aria-label="Email">' + ICONS.email + "</a>";
    if (L.linkedin) linksHtml += '<a href="' + esc(L.linkedin) + '" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">' + ICONS.linkedin + "</a>";
    if (L.github) linksHtml += '<a href="' + esc(L.github) + '" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">' + ICONS.github + "</a>";
    if (L.scholar) linksHtml += '<a href="' + esc(L.scholar) + '" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar">' + ICONS.scholar + "</a>";
    if (L.researchgate) linksHtml += '<a href="' + esc(L.researchgate) + '" target="_blank" rel="noopener" title="ResearchGate" aria-label="ResearchGate">' + ICONS.researchgate + "</a>";
    if (L.huggingface) linksHtml += '<a href="' + esc(L.huggingface) + '" target="_blank" rel="noopener" title="Hugging Face" aria-label="Hugging Face">' + ICONS.huggingface + "</a>";
    if (L.orcid) linksHtml += '<a href="' + esc(L.orcid) + '" target="_blank" rel="noopener" title="ORCID" aria-label="ORCID">' + ICONS.orcid + "</a>";

    el("sidebar").innerHTML =
      '<div class="profile-card">' +
        '<img class="profile-photo" src="' + esc(p.photo) + '" alt="Portrait of ' + esc(p.name) + '">' +
        '<div class="profile-name">' + esc(p.name) + (p.nameCN ? '<span class="cn">' + esc(p.nameCN) + "</span>" : "") + "</div>" +
        '<div class="profile-title">' + esc(p.title) + "</div>" +
        '<div class="profile-affil">' + esc(p.affiliation) + "<br>" + esc(p.university) + "</div>" +
        '<div class="profile-loc">' + ICONS.pin + esc(p.location) + "</div>" +
        '<div class="keyword-chips">' + p.keywords.map(function (k) { return "<span>" + esc(k) + "</span>"; }).join("") + "</div>" +
        '<div class="profile-links">' + linksHtml + "</div>" +
        '<div class="visitor-map" hidden>' +
          '<canvas class="visitor-map-canvas" role="img" aria-label="Map of visitor locations"></canvas>' +
          '<p class="visitor-map-caption"></p>' +
        "</div>" +
      "</div>";
  }

  /* ---------- 访客地图（canvas 世界地图 + 访问统计）----------
     思路与数据管线参考 github.com/SonghuaHu-UMD/songhuahu-umd.github.io：
     GoatCounter 计数 → build-visitor-map.js 定期生成 visitor_map.json → 本函数渲染。
     数据为空时组件保持隐藏。 */
  function initVisitorMap() {
    var holder = document.querySelector(".visitor-map");
    if (!holder || !window.fetch) return;

    /* 等宽圆柱投影，裁掉无人居住的纬度（南极洲）， sidebar 不浪费高度 */
    var LAT_MAX = 84, LAT_MIN = -60;
    var ASPECT = 360 / (LAT_MAX - LAT_MIN);

    Promise.all([
      fetch("assets/world_land.json").then(function (r) { return r.json(); }),
      fetch("assets/visitor_map.json").then(function (r) { return r.json(); })
    ]).then(render).catch(function () { /* 保持隐藏 */ });

    function themeColor(name, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fallback;
    }
    function withAlpha(hex, alpha) {
      var m = hex.replace("#", "");
      if (m.length === 3) m = m.replace(/./g, "$&$&");
      var n = parseInt(m, 16);
      return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + alpha + ")";
    }

    function render(res) {
      var land = res[0].land, data = res[1];
      var points = (data && data.points) || [];
      if (!points.length) return;   // 暂无访问数据：不显示

      /* 有省级数据的拆成省/州点；无法定位的访问量留在国家点上，总数不重复计算 */
      var dots = [];
      for (var i = 0; i < points.length; i++) {
        var p = points[i], regions = p.regions || [], rest = p.count;
        for (var j = 0; j < regions.length; j++) {
          var r = regions[j];
          if (r.lon == null) continue;
          dots.push({ lon: r.lon, lat: r.lat, count: r.count, head: r.name + " · " + r.count, sub: p.label });
          rest -= r.count;
        }
        if (rest <= 0) continue;
        var dot = { lon: p.lon, lat: p.lat, count: rest, head: p.label + " · " + p.count };
        if (rest < p.count) dot.sub = rest + " elsewhere in the country";
        else if (regions.length) dot.sub = regions.slice(0, 4).map(function (x) { return x.name + " " + x.count; }).join(" · ");
        dots.push(dot);
      }
      if (!dots.length) return;
      dots.sort(function (a, b) { return b.count - a.count; });

      var canvas = holder.querySelector(".visitor-map-canvas");
      var ctx = canvas.getContext("2d");
      var tip = null;
      var maxCount = dots[0].count;
      var w = 0, h = 0;

      function project(lon, lat) {
        return [(lon + 180) / 360 * w, (LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * h];
      }
      /* 面积（而非半径）与访问数成正比；共用透明度使重叠点读作密度 */
      function radius(count) { return 1.6 + Math.sqrt(count / maxCount) * 3.6; }

      function draw() {
        w = holder.clientWidth;
        if (!w) return;
        h = Math.round(w / ASPECT);
        var dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        ctx.beginPath();
        for (var r = 0; r < land.length; r++) {
          var ring = land[r];
          for (var p = 0; p < ring.length; p++) {
            var xy = project(ring[p][0], ring[p][1]);
            if (p === 0) ctx.moveTo(xy[0], xy[1]); else ctx.lineTo(xy[0], xy[1]);
          }
          ctx.closePath();
        }
        ctx.fillStyle = themeColor("--map-land", "#e4e9ed");
        ctx.fill();

        ctx.fillStyle = withAlpha(themeColor("--accent", "#8c1d2f"), 0.72);
        for (var i = 0; i < dots.length; i++) {
          var c = project(dots[i].lon, dots[i].lat);
          ctx.beginPath();
          ctx.arc(c[0], c[1], radius(dots[i].count), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* 先显示再取宽度（隐藏元素 clientWidth 为 0） */
      holder.hidden = false;
      draw();

      var caption = holder.querySelector(".visitor-map-caption");
      caption.textContent = (data.total || 0).toLocaleString() + " visits · " + points.length +
        (points.length === 1 ? " location" : " locations");
      if (data.generated) caption.title = "Updated " + data.generated;

      /* 最近点悬停提示（textContent 写入，不解析 HTML） */
      canvas.addEventListener("mousemove", function (e) {
        var box = canvas.getBoundingClientRect();
        var mx = e.clientX - box.left, my = e.clientY - box.top;
        var hit = null, best = Infinity;
        for (var i = 0; i < dots.length; i++) {
          var c = project(dots[i].lon, dots[i].lat);
          var d = Math.hypot(c[0] - mx, c[1] - my);
          if (d < Math.max(radius(dots[i].count), 5) && d < best) { best = d; hit = dots[i]; }
        }
        if (!hit) { if (tip) tip.style.opacity = 0; canvas.style.cursor = ""; return; }
        if (!tip) {
          tip = document.createElement("div");
          tip.className = "visitor-map-tip";
          document.body.appendChild(tip);
        }
        canvas.style.cursor = "pointer";
        tip.textContent = "";
        var head = document.createElement("div");
        head.textContent = hit.head;
        tip.appendChild(head);
        if (hit.sub) {
          var sub = document.createElement("div");
          sub.className = "visitor-map-tip-sub";
          sub.textContent = hit.sub;
          tip.appendChild(sub);
        }
        tip.style.opacity = 1;
        tip.style.left = (e.pageX + 12) + "px";
        tip.style.top = (e.pageY + 12) + "px";
      });
      canvas.addEventListener("mouseleave", function () { if (tip) tip.style.opacity = 0; });
      window.addEventListener("resize", draw);
      /* 深色模式切换时按新配色重绘 */
      var themeBtn = document.getElementById("themeToggle");
      if (themeBtn) themeBtn.addEventListener("click", function () { setTimeout(draw, 50); });
    }
  }

  /* ---------- 渲染：About + 统计 ---------- */
  function renderAbout() {
    el("aboutBody").innerHTML = D.about.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    if (D.researchFigure && D.researchFigure.src) {
      el("aboutBody").innerHTML +=
        '<figure class="research-figure">' +
          '<a href="' + esc(D.researchFigure.src) + '" target="_blank" rel="noopener" title="Click to view full size">' +
            '<img src="' + esc(D.researchFigure.src) + '" alt="Research overview" loading="lazy">' +
          "</a>" +
          (D.researchFigure.caption ? "<figcaption>" + esc(D.researchFigure.caption) + "</figcaption>" : "") +
        "</figure>";
    }
    el("statsGrid").innerHTML = D.stats.map(function (s) {
      return '<div class="stat-card"><div class="stat-value">' + esc(s.value) + '</div><div class="stat-label">' + esc(s.label) + "</div></div>";
    }).join("");
  }

  /* ---------- 渲染：News ---------- */
  function renderNews() {
    el("newsList").innerHTML = D.news.map(function (n) {
      return '<li class="news-item"><span class="news-date">' + esc(n.date) + '</span><span class="news-text">' + esc(n.text) + "</span></li>";
    }).join("");
  }

  /* ---------- 渲染：Publications（含类型筛选） ---------- */
  function renderPublications() {
    var types = ["All"];
    D.publications.forEach(function (p) { if (types.indexOf(p.type) < 0) types.push(p.type); });

    el("pubFilters").innerHTML = types.map(function (t, i) {
      var count = t === "All" ? D.publications.length : D.publications.filter(function (p) { return p.type === t; }).length;
      return '<button class="pub-filter' + (i === 0 ? " active" : "") + '" data-type="' + esc(t) + '">' + esc(t) + " · " + count + "</button>";
    }).join("");

    function draw(filter) {
      var items = D.publications.filter(function (p) { return filter === "All" || p.type === filter; });
      el("pubList").innerHTML = items.map(function (p) {
        var links = p.links.map(function (l) {
          return '<a class="pub-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
        }).join("");
        var body =
          '<div class="pub-authors">' + markAuthor(p.authors) + " (" + p.year + ").</div>" +
          '<div class="pub-title">' + esc(p.title) + ".</div>" +
          '<div class="pub-venue">' + esc(p.venue) + "</div>" +
          '<div class="pub-meta"><span class="pub-tag">' + esc(p.type) + '</span>' + links + "</div>";
        if (p.image || p.imageFull) {
          var thumbSrc = p.image || p.imageFull;
          var fullSrc = p.imageFull || p.image;
          return '<li class="pub-item with-image">' +
            '<div class="pub-body">' + body + "</div>" +
            '<a class="pub-thumb" href="' + esc(fullSrc) + '" target="_blank" rel="noopener" title="Click to view full-resolution image">' +
              '<img src="' + esc(thumbSrc) + '" alt="Figure: ' + esc(p.title) + '" loading="lazy">' +
            "</a>" +
          "</li>";
        }
        return '<li class="pub-item">' + body + "</li>";
      }).join("");
      bindReveal();
    }

    el("pubFilters").addEventListener("click", function (e) {
      var btn = e.target.closest(".pub-filter");
      if (!btn) return;
      el("pubFilters").querySelectorAll(".pub-filter").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      draw(btn.dataset.type);
    });

    draw("All");
    el("pubNote").textContent = D.publicationsNote || "";
    el("manuCount").textContent = "(" + D.manuscripts.length + ")";
    el("manuList").innerHTML = D.manuscripts.map(function (m) { return "<li>" + markAuthor(m) + "</li>"; }).join("");
  }

  /* ---------- 渲染：Research / Teaching ---------- */
  function renderExp(listId, arr, withProject) {
    el(listId).innerHTML = arr.map(function (e) {
      return '<div class="exp-card">' +
        '<div class="exp-head"><span class="exp-role">' + esc(e.role) + '</span><span class="exp-period">' + esc(e.period) + "</span></div>" +
        '<div class="exp-org">' + esc(e.org) + "</div>" +
        (withProject && e.project ? '<div class="exp-project">' + esc(e.project) + "</div>" : "") +
        '<div class="exp-desc">' + esc(e.description) + "</div>" +
      "</div>";
    }).join("");
  }

  /* 研究经历卡片：支持配图（可多张，缩略图+高清原图）、链接按钮、成果说明 */
  function renderResearch() {
    el("researchList").innerHTML = D.research.map(function (e) {
      var links = (e.links || []).map(function (l) {
        return '<a class="pub-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
      }).join("");
      var body =
        '<div class="exp-head"><span class="exp-role">' + esc(e.role) + '</span><span class="exp-period">' + esc(e.period) + "</span></div>" +
        '<div class="exp-org">' + esc(e.org) + "</div>" +
        (e.project ? '<div class="exp-project">' + esc(e.project) + "</div>" : "") +
        '<div class="exp-desc">' + esc(e.description) + "</div>" +
        (e.note ? '<div class="exp-note">' + esc(e.note) + "</div>" : "") +
        (links ? '<div class="pub-meta">' + links + "</div>" : "");
      /* 多张图（images 数组）或单张图（image/imageFull） */
      var imgs = e.images || ((e.image || e.imageFull) ? [{ image: e.image, imageFull: e.imageFull }] : []);
      if (imgs.length) {
        var thumbs = imgs.map(function (im) {
          var thumbSrc = im.image || im.imageFull;
          var fullSrc = im.imageFull || im.image;
          return '<a class="pub-thumb" href="' + esc(fullSrc) + '" target="_blank" rel="noopener" title="Click to view full-resolution image">' +
            '<img src="' + esc(thumbSrc) + '" alt="Figure: ' + esc(e.project) + '" loading="lazy">' +
          "</a>";
        }).join("");
        return '<div class="exp-card with-image">' +
          '<div class="exp-body">' + body + "</div>" +
          '<div class="exp-thumbs">' + thumbs + "</div>" +
        "</div>";
      }
      return '<div class="exp-card">' + body + "</div>";
    }).join("");
  }

  /* ---------- 渲染：Awards / Talks / Education / Service / Certs ---------- */
  function renderRest() {
    el("awardsList").innerHTML = D.awards.map(function (a) {
      return '<li class="award-item"><span class="award-year">' + esc(a.year) + '</span><span class="award-text">' + esc(a.text) + "</span></li>";
    }).join("");

    el("talksList").innerHTML = D.talks.map(function (t) {
      return '<li class="talk-item"><span class="talk-date">' + esc(t.date) + '</span><span><span class="talk-title">' + esc(t.title) + '</span><span class="talk-venue" style="display:block">' + esc(t.venue) + "</span></span></li>";
    }).join("");

    el("eduList").innerHTML = D.education.map(function (e) {
      return '<div class="edu-item">' +
        '<div class="edu-degree">' + esc(e.degree) + "</div>" +
        '<div class="edu-school">' + esc(e.school) + "</div>" +
        '<div class="edu-meta"><span class="edu-period">' + esc(e.period) + '</span><span class="edu-detail">' + esc(e.detail) + "</span></div>" +
        '<div class="edu-thesis">' + esc(e.thesis) + "</div>" +
      "</div>";
    }).join("");

    el("serviceList").innerHTML = D.service.map(function (g) {
      return '<div class="service-card"><div class="service-group">' + esc(g.group) + "</div><ul>" +
        g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
    }).join("");

    el("certList").innerHTML = D.certifications.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");

    el("footer").innerHTML = "<p>" + esc(D.footer.line1) + "<br>" + esc(D.footer.line2) + '</p><p class="copy">' + esc(D.footer.copyright) + "</p>";
  }

  /* ---------- 深色模式 ---------- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    el("themeToggle").addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      if (dark) { document.documentElement.removeAttribute("data-theme"); } else { document.documentElement.setAttribute("data-theme", "dark"); }
      try { localStorage.setItem("theme", dark ? "light" : "dark"); } catch (e) {}
    });
  }

  /* ---------- 导航：滚动状态 / 移动端菜单 / 滚动高亮 ---------- */
  function initNav() {
    var nav = el("topnav");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 8);
      var h = document.documentElement;
      var pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      el("progressBar").style.width = pct + "%";
      el("backToTop").classList.toggle("show", window.scrollY > 500);
    }, { passive: true });

    el("menuToggle").addEventListener("click", function () {
      var open = el("navLinks").classList.toggle("open");
      this.classList.toggle("open", open);
      this.setAttribute("aria-expanded", open);
    });
    el("navLinks").addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        el("navLinks").classList.remove("open");
        el("menuToggle").classList.remove("open");
      }
    });

    // scrollspy
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          var a = map[en.target.id];
          if (a) a.classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".section").forEach(function (s) { spy.observe(s); });

    el("backToTop").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 滚动渐入动画 ---------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("visible"); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.06 });

  function bindReveal() {
    var targets = document.querySelectorAll(
      ".section-head, .about-body p, .research-figure, .stat-card, .news-item, .pub-item, .exp-card, .award-item, .talk-item, .edu-item, .service-card, .certs, .manuscripts"
    );
    targets.forEach(function (t) {
      if (!t.classList.contains("reveal")) {
        t.classList.add("reveal");
        revealObserver.observe(t);
      }
    });
  }

  /* ---------- 启动 ---------- */
  renderSidebar();
  initVisitorMap();
  renderAbout();
  renderNews();
  renderPublications();
  renderResearch();
  renderExp("teachingList", D.teaching, false);
  renderRest();
  initTheme();
  initNav();
  bindReveal();
})();
