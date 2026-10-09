var e=Object.defineProperty,t=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},n=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),r=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=t((()=>{})),a=t((()=>{}));function o(){let e=localStorage.getItem(l);if(!e)return u;try{return{...u,...JSON.parse(e)}}catch{return u}}function s(e){localStorage.setItem(l,JSON.stringify(e))}function c(e){let t=document.documentElement;if(e===`dark`){t.classList.add(`dark`);return}if(e===`light`){t.classList.remove(`dark`);return}let n=window.matchMedia(`(prefers-color-scheme: dark)`).matches;t.classList.toggle(`dark`,n)}var l,u,d=t((()=>{l=`flowboard-appearance`,u={theme:`light`}})),f,ee=t((()=>{f=[{id:`flowboard`,name:`Flowboard`,description:`Project management SaaS for teams to plan, organize, and track their work.`,status:`in-progress`,priority:`high`,dueDate:`2026-09-18`,memberIds:[1,2,3],createdAt:`2026-08-20`},{id:`gojotech`,name:`GojoTech`,description:`Modern e-commerce platform for discovering and purchasing technology products.`,status:`in-progress`,priority:`high`,dueDate:`2026-09-10`,memberIds:[1,4],createdAt:`2026-08-12`},{id:`marketing-site`,name:`Marketing Website`,description:`Company marketing website focused on product presentation and lead generation.`,status:`planning`,priority:`medium`,dueDate:`2026-10-05`,memberIds:[1,5],createdAt:`2026-08-28`},{id:`mobile-app`,name:`Mobile App`,description:`Mobile companion application for managing projects and tasks on the go.`,status:`completed`,priority:`medium`,dueDate:`2026-08-30`,memberIds:[1,6,7],createdAt:`2026-07-15`},{id:`design-system`,name:`Design System`,description:`Reusable UI component library and design guidelines for Flowboard products.`,status:`on-hold`,priority:`low`,dueDate:`2026-10-20`,memberIds:[1,8],createdAt:`2026-08-05`}]})),p,te=t((()=>{p=[{id:`task-1`,projectId:`flowboard`,title:`Design project dashboard`,description:`Create the main dashboard layout with project statistics, tasks, deadlines, and activity.`,status:`completed`,priority:`high`,dueDate:`2026-09-05`,assigneeId:1,createdAt:`2026-08-21`},{id:`task-2`,projectId:`flowboard`,title:`Build project management page`,description:`Implement project listing, search, filtering, sorting, and project creation.`,status:`in-progress`,priority:`high`,dueDate:`2026-09-08`,assigneeId:1,createdAt:`2026-08-22`},{id:`task-3`,projectId:`flowboard`,title:`Implement task management`,description:`Build task creation, completion, editing, filtering, and project task views.`,status:`todo`,priority:`high`,dueDate:`2026-09-12`,assigneeId:2,createdAt:`2026-08-25`},{id:`task-4`,projectId:`flowboard`,title:`Add responsive mobile navigation`,description:`Make the application navigation work properly across mobile and desktop layouts.`,status:`completed`,priority:`medium`,dueDate:`2026-08-30`,assigneeId:1,createdAt:`2026-08-23`},{id:`task-5`,projectId:`flowboard`,title:`Improve application accessibility`,description:`Review keyboard navigation, focus states, labels, and semantic HTML throughout the application.`,status:`todo`,priority:`medium`,dueDate:`2026-09-15`,assigneeId:2,createdAt:`2026-08-27`},{id:`task-6`,projectId:`gojotech`,title:`Implement product search`,description:`Add product search with real-time filtering across the product catalog.`,status:`completed`,priority:`high`,dueDate:`2026-08-25`,assigneeId:1,createdAt:`2026-08-15`},{id:`task-7`,projectId:`gojotech`,title:`Build shopping cart`,description:`Implement cart state, quantity controls, item removal, and total calculations.`,status:`completed`,priority:`high`,dueDate:`2026-08-28`,assigneeId:1,createdAt:`2026-08-18`},{id:`task-8`,projectId:`gojotech`,title:`Complete checkout flow`,description:`Build the checkout interface with customer information, shipping, and order summary.`,status:`in-progress`,priority:`high`,dueDate:`2026-09-06`,assigneeId:4,createdAt:`2026-08-20`},{id:`task-9`,projectId:`marketing-site`,title:`Create landing page`,description:`Build the main marketing landing page and responsive hero section.`,status:`in-progress`,priority:`medium`,dueDate:`2026-09-20`,assigneeId:1,createdAt:`2026-08-29`},{id:`task-10`,projectId:`marketing-site`,title:`Write product content`,description:`Prepare copy for the product, features, pricing, and company sections.`,status:`todo`,priority:`low`,dueDate:`2026-09-25`,assigneeId:5,createdAt:`2026-08-30`},{id:`task-11`,projectId:`mobile-app`,title:`Release production build`,description:`Prepare the final mobile application build for production release.`,status:`completed`,priority:`high`,dueDate:`2026-08-30`,assigneeId:6,createdAt:`2026-08-27`},{id:`task-12`,projectId:`design-system`,title:`Create button components`,description:`Design and document reusable button variants for the Flowboard design system.`,status:`in-progress`,priority:`medium`,dueDate:`2026-09-18`,assigneeId:8,createdAt:`2026-08-10`}]})),m,ne=t((()=>{m=[{id:1,name:`Abir`,email:`abir@example.com`,role:`Admin`,initials:`AB`,status:`active`},{id:2,name:`Sarah`,email:`sarah@example.com`,role:`Designer`,initials:`SM`,status:`active`},{id:4,name:`Daniel`,email:`daniel@example.com`,role:`Developer`,initials:`DB`,status:`active`},{id:5,name:`Emma`,email:`emma@example.com`,role:`Content Writer`,initials:`EW`,status:`active`},{id:6,name:`Michael`,email:`michael@example.com`,role:`Developer`,initials:`MK`,status:`active`},{id:7,name:`Nadia`,email:`nadia@example.com`,role:`Project Manager`,initials:`NR`,status:`active`},{id:8,name:`Olivia`,email:`olivia@example.com`,role:`Designer`,initials:`OR`,status:`active`}]}));function h(){let e=localStorage.getItem(ae);if(!e)return b;try{return{...b,...JSON.parse(e)}}catch{return b}}function re(){let e=localStorage.getItem(le);if(!e)return{projects:[...x],tasks:[...oe],teamMembers:[...se],activities:[...ce]};try{let t=JSON.parse(e);return{projects:Array.isArray(t.projects)?t.projects:[...x],tasks:Array.isArray(t.tasks)?t.tasks:[...oe],teamMembers:Array.isArray(t.teamMembers)?t.teamMembers:[...se],activities:Array.isArray(t.activities)?t.activities:[...ce]}}catch(e){return console.error(`Failed to load Flowboard state:`,e),{projects:[...x],tasks:[...oe],teamMembers:[...se],activities:[...ce]}}}function g(){localStorage.setItem(le,JSON.stringify(S))}function _(){return S}function ie(e){return ue.add(e),()=>{ue.delete(e)}}function v(){g(),ue.forEach(e=>{e(S)})}function y(e){S.activities.unshift({id:crypto.randomUUID(),...e,createdAt:new Date().toISOString()}),S.activities.splice(50)}var ae,b,x,oe,se,ce,le,S,ue,C=t((()=>{ee(),te(),ne(),ae=`flowboard-profile`,b={name:`Abir`,email:`abir@example.com`,role:`Admin`},x=structuredClone(f),oe=structuredClone(p),se=structuredClone(m),ce=[],le=`flowboard-state`,S=re(),ue=new Set}));function w(){let e=localStorage.getItem(Ce);if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>e&&!Te.has(e.id)):[]}catch{return[]}}function de(e){localStorage.setItem(Ce,JSON.stringify(e))}function fe(){try{let e=localStorage.getItem(we),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function pe(e,t,n){return Math.floor(Date.UTC(e,t,n)/864e5)}function me(e,t=new Date){if(!e)return null;let n=String(e).slice(0,10),r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(n);if(!r)return null;let i=Number(r[1]),a=Number(r[2]),o=Number(r[3]),s=new Date(i,a-1,o);if(s.getFullYear()!==i||s.getMonth()!==a-1||s.getDate()!==o)return null;let c=pe(t.getFullYear(),t.getMonth(),t.getDate());return pe(i,a-1,o)-c}function he(e,t){return t===0?{title:`Task due today`,message:`"${e.title}" is due today.`}:t===1?{title:`Task due tomorrow`,message:`"${e.title}" is due tomorrow.`}:{title:`Task due in ${t} days`,message:`"${e.title}" is due in ${t} days.`}}function ge(){let e=_()||{},t=Array.isArray(e.tasks)?e.tasks:[],n=w(),r=new Set(fe()),i=new Set(n.map(e=>e.id)),a=!1;for(let e of t){if(!e||e.status===`completed`||!e.dueDate)continue;let t=me(e.dueDate);if(t===null||t<0||t>3)continue;let o=String(e.dueDate).slice(0,10),s=`deadline-${e.id}-${o}-${t}`;if(r.has(s))continue;let c=he(e,t);i.has(s)||(n.unshift({id:s,title:c.title,message:c.message,type:`deadline`,read:!1,createdAt:new Date().toISOString()}),i.add(s),a=!0),r.add(s)}de(n.slice(0,50)),localStorage.setItem(we,JSON.stringify([...r].slice(-500))),a&&T()}function _e(e){let t=Math.max(0,Math.floor((Date.now()-new Date(e).getTime())/1e3));if(Number.isNaN(t))return`Recently`;if(t<60)return`Just now`;let n=Math.floor(t/60);if(n<60)return`${n} minute${n===1?``:`s`} ago`;let r=Math.floor(n/60);if(r<24)return`${r} hour${r===1?``:`s`} ago`;let i=Math.floor(r/24);return i<7?`${i} day${i===1?``:`s`} ago`:new Date(e).toLocaleDateString()}function ve(e){let t={task:`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
        aria-hidden="true"
      >
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    `,deadline:`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    `,info:`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    `};return t[e]||t.info}function ye(e){let t={task:`bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300`,deadline:`bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300`,info:`bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300`};return t[e]||t.info}function be(e){return String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function T(){let e=document.querySelector(`#notifications-container`),t=document.querySelector(`#notifications-button`),n=document.querySelector(`#notifications-badge`);if(!e||!t||!n)return;let r=w(),i=r.filter(e=>!e.read).length;n.textContent=i>9?`9+`:String(i),n.classList.toggle(`hidden`,i===0),t.setAttribute(`aria-label`,i>0?`Notifications, ${i} unread`:`Notifications`);let a=r.length?r.map(e=>`
            <button
              type="button"
              class="notification-item flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70 ${e.read?``:`bg-indigo-50/50 dark:bg-indigo-500/5`}"
              data-notification-id="${be(e.id)}"
            >
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-full ${ye(e.type)}"
              >
                ${ve(e.type)}
              </span>

              <span class="min-w-0 flex-1">
                <span class="flex items-start justify-between gap-2">
                  <span class="text-sm font-semibold text-slate-900 dark:text-white">
                    ${be(e.title)}
                  </span>

                  ${e.read?``:`<span class="mt-1.5 size-2 shrink-0 rounded-full bg-indigo-600" aria-label="Unread"></span>`}
                </span>

                <span class="mt-1 block text-sm leading-5 text-slate-600 dark:text-slate-300">
                  ${be(e.message)}
                </span>

                <span class="mt-2 block text-xs text-slate-400 dark:text-slate-500">
                  ${be(_e(e.createdAt))}
                </span>
              </span>
            </button>
          `).join(``):`
        <div class="flex flex-col items-center px-6 py-12 text-center">
          <div class="flex size-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="size-7"
              aria-hidden="true"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
              <path d="M10 21h4"></path>
            </svg>
          </div>

          <h3 class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
            You're all caught up!
          </h3>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            You don't have any notifications yet.
          </p>
        </div>
      `;e.innerHTML=`
    <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700">
      <div>
        <h2 class="text-base font-bold text-slate-900 dark:text-white">
          Notifications
        </h2>

        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
          ${i?`${i} unread notification${i===1?``:`s`}`:`You're up to date`}
        </p>
      </div>

      ${i?`
            <button
              type="button"
              id="mark-all-notifications-read"
              class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Mark all as read
            </button>
          `:``}
    </div>

    <div class="max-h-[min(65vh,420px)] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
      ${a}
    </div>

    <div class="border-t border-slate-200 px-4 py-3 text-center dark:border-slate-700">
      <button
        type="button"
        id="clear-read-notifications"
        class="text-xs font-medium text-slate-500 transition-colors hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
        ${r.some(e=>e.read)?``:`disabled`}
      >
        Clear read notifications
      </button>
    </div>
  `,xe()}function xe(){let e=document.querySelector(`#notifications-container`);e&&(e.querySelectorAll(`.notification-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.notificationId;de(w().map(e=>e.id===t?{...e,read:!0}:e)),T()})}),e.querySelector(`#mark-all-notifications-read`)?.addEventListener(`click`,()=>{de(w().map(e=>({...e,read:!0}))),T()}),e.querySelector(`#clear-read-notifications`)?.addEventListener(`click`,()=>{de(w().filter(e=>!e.read)),T()}))}function Se(){let e=document.querySelector(`#notifications-button`),t=document.querySelector(`#notifications-panel`),n=document.querySelector(`#notifications-container`);if(!e||!t||!n){console.error(`Notification elements not found.`);return}if(ge(),e.dataset.notificationsInitialized===`true`){T();return}e.dataset.notificationsInitialized=`true`;function r(){ge(),t.classList.remove(`hidden`),e.setAttribute(`aria-expanded`,`true`),T()}function i(){t.classList.add(`hidden`),e.setAttribute(`aria-expanded`,`false`)}e.addEventListener(`click`,t=>{t.stopPropagation(),e.getAttribute(`aria-expanded`)===`true`?i():r()}),t.addEventListener(`click`,e=>{e.stopPropagation()}),document.addEventListener(`click`,n=>{!t.contains(n.target)&&!e.contains(n.target)&&i()}),document.addEventListener(`keydown`,n=>{n.key===`Escape`&&!t.classList.contains(`hidden`)&&(i(),e.focus())}),Ee||=window.setInterval(ge,6e4),T()}var Ce,we,Te,Ee,De=t((()=>{C(),Ce=`flowboard-notifications`,we=`flowboard-deadline-reminders-sent`,Te=new Set([`notification-1`,`notification-2`,`notification-3`]),Ee=null}));function Oe(){if(D=document.querySelector(`#toast-container`),!D){console.error(`Toast container mount point not found.`);return}D.className=`fixed right-4 top-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6`,D.setAttribute(`aria-live`,`polite`),D.setAttribute(`aria-atomic`,`true`)}function E(e,t=`info`,n=4e3){if(D||Oe(),!D)return;let r=document.createElement(`div`);r.className=`
        flex items-start gap-3 rounded-xl border bg-white p-4 shadow-lg
        opacity-0 translate-x-4
        transition-all duration-300
    `;let i=ke(t);r.innerHTML=`
        <div class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full ${i.iconBackground}">
            ${i.icon}
        </div>

        <div class="min-w-0 flex-1">
            <p class="text-sm font-semibold text-slate-900">
                ${i.title}
            </p>

            <p class="mt-1 text-sm leading-5 text-slate-500">
                ${e}
            </p>
        </div>

        <button
            type="button"
            class="toast-close shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close notification"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
            >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg>
        </button>
    `,D.appendChild(r),requestAnimationFrame(()=>{r.classList.remove(`opacity-0`,`translate-x-4`)});let a=r.querySelector(`.toast-close`),o=()=>{r.classList.add(`opacity-0`,`translate-x-4`),setTimeout(()=>{r.remove()},300)};a.addEventListener(`click`,o);let s,c=n,l=Date.now();function u(){l=Date.now(),s=setTimeout(()=>{o()},c)}r.addEventListener(`mouseenter`,()=>{clearTimeout(s);let e=Date.now()-l;c-=e}),r.addEventListener(`mouseleave`,()=>{u()}),u()}function ke(e){let t={success:{title:`Success`,iconBackground:`bg-green-100 text-green-600`,icon:`
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <path d="m5 12 4 4L19 6"></path>
                </svg>
            `},error:{title:`Error`,iconBackground:`bg-red-100 text-red-600`,icon:`
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                </svg>
            `},warning:{title:`Warning`,iconBackground:`bg-amber-100 text-amber-600`,icon:`
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"></path>
                </svg>
            `},info:{title:`Information`,iconBackground:`bg-blue-100 text-blue-600`,icon:`
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 11v5"></path>
                    <path d="M12 8h.01"></path>
                </svg>
            `}};return t[e]||t.info}var D,O=t((()=>{D=null}));function Ae(e){j=e;let{teamMembers:t}=_();A=document.createElement(`div`),A.id=`project-modal`,A.className=`fixed inset-0 z-[90] hidden items-center justify-center p-4`,A.innerHTML=`
    <!-- Backdrop -->
    <div
      class="project-modal-backdrop absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
    ></div>

    <!-- Modal -->
    <div
      class="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >

      <!-- Header -->
      <div
        class="flex items-center justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800"
      >

        <div>
          <h2
            id="project-modal-title"
            class="text-lg font-bold text-slate-900 dark:text-white"
          >
            Create Project
          </h2>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Add a new project to your workspace.
          </p>
        </div>

        <button
          id="close-project-modal"
          type="button"
          class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

      </div>


      <!-- Form -->
      <form id="project-form">

        <div class="space-y-5 px-6 py-6">

          <!-- Name -->
          <div>
            <label
              for="project-name"
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Project Name
            </label>

            <input
              id="project-name"
              name="name"
              type="text"
              required
              maxlength="80"
              placeholder="e.g. Website Redesign"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
            />
          </div>


          <!-- Description -->
          <div>
            <label
              for="project-description"
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Description
            </label>

            <textarea
              id="project-description"
              name="description"
              rows="3"
              maxlength="300"
              placeholder="What is this project about?"
              class="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
            ></textarea>
          </div>


          <!-- Due Date + Priority -->
          <div class="grid gap-5 sm:grid-cols-2">

            <div>
              <label
                for="project-due-date"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Due Date
              </label>

              <input
                id="project-due-date"
                name="dueDate"
                type="date"
                required
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-indigo-500/20"
              />
            </div>


            <div>
              <label
                for="project-priority"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Priority
              </label>

              <select
                id="project-priority"
                name="priority"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-indigo-500/20"
              >
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
              </select>
            </div>

          </div>


          <!-- Project Members -->
          <div>

            <label
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Project Members
            </label>

            <div
              class="mt-2 max-h-40 space-y-2 overflow-y-auto rounded-lg border border-slate-200 p-3 dark:border-slate-700"
            >

              ${t.map(e=>`
                    <label
                      class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                    >

                      <input
                        type="checkbox"
                        name="memberIds"
                        value="${e.id}"
                        ${e.id===1?`checked`:``}
                        class="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
                      />

                      <div
                        class="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                      >
                        ${e.initials}
                      </div>

                      <div class="min-w-0">

                        <p
                          class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100"
                        >
                          ${e.name}
                        </p>

                        <p
                          class="truncate text-xs text-slate-500 dark:text-slate-400"
                        >
                          ${e.role}
                        </p>

                      </div>

                    </label>
                  `).join(``)}

            </div>

            <p class="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
              Select the members who will work on this project.
            </p>

          </div>

        </div>


        <!-- Footer -->
        <div
          class="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950"
        >

          <button
            id="cancel-project-modal"
            type="button"
            class="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Project
          </button>

        </div>

      </form>

    </div>
  `,document.body.appendChild(A),je()}function je(){let e=A.querySelector(`#close-project-modal`),t=A.querySelector(`#cancel-project-modal`),n=A.querySelector(`.project-modal-backdrop`),r=A.querySelector(`#project-form`);e.addEventListener(`click`,k),t.addEventListener(`click`,k),n.addEventListener(`click`,k),r.addEventListener(`submit`,Ie),document.addEventListener(`keydown`,Fe)}function Me(){let{teamMembers:e}=_(),t=A.querySelector(`#project-form .max-h-40`);if(!t)return;let n=new Set([...t.querySelectorAll(`input[name="memberIds"]:checked`)].map(e=>Number(e.value)));t.innerHTML=e.map(e=>`
        <label
          class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <input
            type="checkbox"
            name="memberIds"
            value="${e.id}"
            ${n.has(e.id)||e.id===1?`checked`:``}
            class="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
          />

          <div
            class="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            ${e.initials}
          </div>

          <div class="min-w-0">
            <p
              class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100"
            >
              ${e.name}
            </p>

            <p
              class="truncate text-xs text-slate-500 dark:text-slate-400"
            >
              ${e.role}
            </p>
          </div>
        </label>
      `).join(``)}function Ne(){if(!A)return;Me(),A.classList.remove(`hidden`),A.classList.add(`flex`),document.body.classList.add(`overflow-hidden`);let e=A.querySelector(`#project-name`);setTimeout(()=>{e.focus()},50)}function Pe(){A&&(A.classList.add(`hidden`),A.classList.remove(`flex`),document.body.classList.remove(`overflow-hidden`),A.querySelector(`#project-form`).reset())}function Fe(e){e.key===`Escape`&&!A.classList.contains(`hidden`)&&k()}function k(){Pe()}function Ie(e){e.preventDefault();let t=new FormData(e.currentTarget),n=t.get(`name`).trim(),r=t.get(`description`).trim(),i=t.get(`dueDate`),a=t.get(`priority`),o=t.getAll(`memberIds`).map(e=>Number(e));if(!n){E(`Please enter a project name.`,`warning`);return}if(!i){E(`Please select a due date.`,`warning`);return}if(o.length===0){E(`Please select at least one project member.`,`warning`);return}let s={id:`${n.toLowerCase().replace(/\s+/g,`-`)}-${Date.now()}`,name:n,description:r||`No description provided.`,status:`planning`,priority:a,progress:0,dueDate:i,memberIds:o,tasks:{total:0,completed:0},createdAt:new Date().toISOString().split(`T`)[0]};Pe(),j&&j(s),E(`"${n}" has been created successfully.`,`success`)}var A,j,Le=t((()=>{O(),C(),A=null,j=null}));function Re(){let e=new Date().getHours();return e<12?`Good morning`:e<18?`Good afternoon`:`Good evening`}function ze(){let e=document.querySelector(`#dashboard-welcome`);if(!e){console.error(`Dashboard welcome mount point not found.`);return}e.innerHTML=`
    <section class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

      <div>

        <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          ${Ve}
        </p>

        <h1 class="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        ${Re()}, ${He}.
        </h1>

        <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          Here's what's happening across your workspace today.
        </p>

      </div>

      <button
        type="button"
        id="create-project-button"
        class="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="size-4"
        >
          <path d="M12 5v14"></path>
          <path d="M5 12h14"></path>
        </svg>

        New Project

      </button>

    </section>
  `,Be();let t=e.querySelector(`#create-project-button`);t&&t.addEventListener(`click`,Ne)}function Be(){let e=document.querySelector(`#create-project-button`);e&&e.addEventListener(`click`,()=>{let e=document.querySelector(`#project-modal`);if(!e){console.error(`Project modal not found.`);return}e.classList.remove(`hidden`)})}var Ve,He,Ue=t((()=>{Le(),Ve=new Date().toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`,year:`numeric`}),He=(JSON.parse(localStorage.getItem(`flowboard-profile`))||{}).name||`User`}));function We(){let{projects:e,tasks:t,teamMembers:n}=_();return[{label:`Total Projects`,value:e.length,change:`+12.5%`,trend:`up`,description:`vs. last month`},{label:`Active Tasks`,value:t.filter(e=>e.status!==`completed`).length,change:`+8.2%`,trend:`up`,description:`vs. last month`},{label:`Completed Tasks`,value:t.filter(e=>e.status===`completed`).length,change:`+18.4%`,trend:`up`,description:`vs. last month`},{label:`Team Members`,value:n.length,change:`+2`,trend:`up`,description:`this month`}]}var Ge=t((()=>{C()}));function Ke(){let e=document.querySelector(`#dashboard-stats`);if(!e){console.error(`Dashboard stats mount point not found.`);return}e.innerHTML=`
    <section
      aria-label="Workspace statistics"
      class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >

      ${We().map(e=>`
            <article
             class="rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >

              <div class="flex items-start justify-between">

                <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
                  ${e.label}
                </p>

                <div
              class="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                >
                  ${qe(e.label)}
                </div>

              </div>

              <div class="mt-4 flex items-end gap-2">

                <p class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  ${e.value}
                </p>

               

              </div>

          

            </article>
          `).join(``)}

    </section>
  `}function qe(e){return{"Total Projects":`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
      </svg>
    `,"Active Tasks":`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    `,"Completed Tasks":`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <path d="m9 12 2 2 4-4"></path>
        <circle cx="12" cy="12" r="9"></circle>
      </svg>
    `,"Team Members":`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    `}[e]||``}var Je=t((()=>{Ge()}));function Ye(){let e=document.querySelector(`#dashboard-projects`);if(!e){console.error(`Dashboard projects mount point not found.`);return}let{projects:t,teamMembers:n,tasks:r}=_();e.innerHTML=`
    <section class="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Section Header -->
      <div class="flex items-center justify-between border-b px-5 py-4 sm:px-6 dark:border-slate-800">

        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            Projects
          </h2>

          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Track the progress of your active projects.
          </p>
        </div>

        <a
          href="/projects"
        class="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View all
        </a>

      </div>

      <!-- Project List -->
 <div class="divide-y dark:divide-slate-800">

        ${t.slice(0,4).map(e=>{let t=r.filter(t=>t.projectId===e.id),i=t.filter(e=>e.status===`completed`).length,a=t.length===0?0:Math.round(i/t.length*100),o=(e.memberIds||[]).map(e=>n.find(t=>t.id===e)).filter(Boolean),s={planning:`Planning`,"in-progress":`In Progress`,completed:`Completed`,"on-hold":`On Hold`};return{...e,progress:a,members:o.length,status:s[e.status]||e.status,statusType:e.status===`completed`?`success`:e.status===`on-hold`?`warning`:`progress`}}).map(e=>`
             <article
  data-project-id="${e.id}"
  class="dashboard-project-card cursor-pointer p-5 transition-colors hover:bg-slate-50 sm:p-6 dark:hover:bg-slate-800/50"
>

                <!-- Project Top -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div class="min-w-0">

                    <div class="flex items-center gap-3">

                      <div
                      class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                      >
                        ${e.name.charAt(0)}
                      </div>

                      <div class="min-w-0">

                        <h3 class="truncate text-sm font-bold text-slate-900 dark:text-white">
                          ${e.name}
                        </h3>

                        <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          ${e.description}
                        </p>

                      </div>

                    </div>

                  </div>

                  <div class="flex shrink-0 items-center gap-2">

                    ${Xe(e)}

                    <span class="text-sm font-bold text-slate-700 dark:text-slate-200">
                      ${e.progress}%
                    </span>

                  </div>

                </div>

                <!-- Progress -->
                <div class="mt-5">

                  <div class="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                    <div
                      class="h-full rounded-full bg-indigo-600 transition-all duration-500"
                      style="width: ${e.progress}%"
                    ></div>

                  </div>

                </div>

                <!-- Project Meta -->
                <div class="mt-4 flex flex-col gap-3 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">

                  <div class="flex items-center gap-4">

                    <span class="inline-flex items-center gap-1.5">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>

                      ${e.members} members

                    </span>

                  </div>

                  <span class="inline-flex items-center gap-1.5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="size-4"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M16 2v4"></path>
                      <path d="M8 2v4"></path>
                      <path d="M3 10h18"></path>
                    </svg>

                    Due ${e.dueDate}

                  </span>

                </div>

              </article>
            `).join(``)}

      </div>

    </section>
  `,e.querySelectorAll(`.dashboard-project-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.projectId;Z(`/projects/${t}`)})})}function Xe(e){let t={progress:`bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`,warning:`bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300`,success:`bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300`};return`
    <span
      class="rounded-full px-2.5 py-1 text-xs font-semibold ${t[e.statusType]||t.progress}"
    >
      ${e.status}
    </span>
  `}var Ze=t((()=>{C(),Q()}));function Qe(){let e=document.querySelector(`#dashboard-tasks`);if(!e){console.error(`Dashboard tasks mount point not found.`);return}let{tasks:t,projects:n}=_();e.innerHTML=`
    <section class="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Header -->
      <div class="flex items-center justify-between border-b px-5 py-4 sm:px-6 dark:border-slate-800">

        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            My Tasks
          </h2>

          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Tasks that need your attention.
          </p>
        </div>

        <a
          href="/tasks"
          class="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View all
        </a>

      </div>

      <!-- Task List -->
      <div class="divide-y dark:divide-slate-800">

      ${t.map(e=>{let t=n.find(t=>t.id===e.projectId);return`
      <article
        class="flex gap-3 px-5 py-4 transition-colors hover:bg-slate-50 sm:px-6 dark:hover:bg-slate-800/50"
      >

        <!-- Checkbox -->
        <button
          type="button"
          class="task-checkbox mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border ${e.status===`completed`?`border-indigo-600 bg-indigo-600 text-white`:`border-slate-300 bg-white hover:border-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:hover:border-indigo-400`}"
          data-task-id="${e.id}"
          aria-label="${e.status===`completed`?`Mark ${e.title} as incomplete`:`Mark ${e.title} as complete`}"
        >

          ${e.status===`completed`?`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  class="size-3.5"
                >
                  <path d="m5 12 4 4L19 6"></path>
                </svg>
              `:``}

        </button>

        <!-- Task Content -->
        <div class="min-w-0 flex-1">

          <div class="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">

            <h3
              class="truncate text-sm font-semibold ${e.status===`completed`?`text-slate-400 line-through dark:text-slate-500`:`text-slate-800 dark:text-slate-100`}"
            >
              ${e.title}
            </h3>

            ${$e(e)}

          </div>

          <div class="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 dark:text-slate-500">

            <span>
              ${t?t.name:`Unknown project`}
            </span>

            <span class="hidden sm:inline">
              •
            </span>

            <span>
              Due ${e.dueDate}
            </span>

          </div>

        </div>

      </article>
    `}).join(``)}

      </div>

    </section>
  `,et()}function $e(e){let t={high:`bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400`,medium:`bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400`,low:`bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400`};return`
    <span
      class="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${t[e.priority]||t.low}"
    >
      ${e.priority}
    </span>
  `}function et(){document.querySelectorAll(`.task-checkbox`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.taskId,{tasks:n}=_(),r=n.find(e=>e.id===t);r&&(r.status=r.status===`completed`?`todo`:`completed`,v(),r.status===`completed`?E(`"${r.title}" has been completed.`,`success`):E(`"${r.title}" has been marked as incomplete.`,`info`))})})}var tt=t((()=>{C(),O()}));function nt(){let e=document.querySelector(`#dashboard-deadlines`);if(!e){console.error(`Dashboard deadlines mount point not found.`);return}let{projects:t,tasks:n}=_(),r=new Date;r.setHours(0,0,0,0);let i=t.filter(e=>e.dueDate).map(e=>{let t=new Date(`${e.dueDate}T00:00:00`),n=Math.ceil((t-r)/864e5);return{title:e.name,type:`Project`,date:t.toLocaleDateString(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}),daysRemaining:n}}),a=n.filter(e=>e.dueDate).map(e=>{let t=new Date(`${e.dueDate}T00:00:00`),n=Math.ceil((t-r)/864e5);return{title:e.title,type:`Task`,date:t.toLocaleDateString(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}),daysRemaining:n}}),o=[...i,...a].filter(e=>e.daysRemaining>=0).sort((e,t)=>e.daysRemaining-t.daysRemaining).slice(0,3);e.innerHTML=`
    <section class="h-full rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Header -->
      <div class="border-b px-5 py-4 sm:px-6 dark:border-slate-800">

        <h2 class="text-base font-bold text-slate-900 dark:text-white">
          Upcoming Deadlines
        </h2>

        <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Keep an eye on what's coming up.
        </p>

      </div>

      <!-- Deadline List -->
      <div class="divide-y dark:divide-slate-800">

        ${o.length===0?`
              <div class="px-5 py-8 text-center">
                <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
                  No upcoming deadlines.
                </p>
              </div>
            `:o.map(e=>`
                    <article class="p-5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">

                      <div class="flex items-start gap-3">

                        <!-- Calendar Icon -->
                        <div
                          class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            class="size-4"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="4"
                              rx="2"
                            ></rect>

                            <path d="M16 2v4"></path>
                            <path d="M8 2v4"></path>
                            <path d="M3 10h18"></path>
                          </svg>
                        </div>

                        <!-- Deadline Content -->
                        <div class="min-w-0 flex-1">

                          <h3 class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                            ${e.title}
                          </h3>

                          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            ${e.type} • ${e.date}
                          </p>

                        </div>

                      </div>

                      <!-- Days Remaining -->
                      <div class="mt-4 flex items-center justify-between">

                        <span class="text-xs text-slate-400 dark:text-slate-500">
                          Time remaining
                        </span>

                        <span
                          class="text-xs font-semibold ${e.daysRemaining<=7?`text-red-600`:e.daysRemaining<=14?`text-amber-600`:`text-emerald-600`}"
                        >
                          ${e.daysRemaining===0?`Today`:e.daysRemaining===1?`1 day`:`${e.daysRemaining} days`}
                        </span>

                      </div>

                    </article>
                  `).join(``)}

      </div>

      <!-- Footer -->
      <div class="border-t p-4 dark:border-slate-800">

        <a
          href="/calendar"
          class="flex items-center justify-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View calendar

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>

        </a>

      </div>

    </section>
  `}var rt=t((()=>{C()}));function it(){let e=document.querySelector(`#dashboard-activity`);if(!e){console.error(`Dashboard activity mount point not found.`);return}let{activities:t,projects:n}=_(),r=t.slice(0,5);function i(e){let t=new Date(e),n=Math.floor((new Date().getTime()-t.getTime())/1e3);if(n<60)return`Just now`;let r=Math.floor(n/60);if(r<60)return`${r} minute${r===1?``:`s`} ago`;let i=Math.floor(r/60);if(i<24)return`${i} hour${i===1?``:`s`} ago`;let a=Math.floor(i/24);return a===1?`Yesterday`:a<7?`${a} days ago`:t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}function a(e){switch(e.type){case`project_created`:return`created project`;case`project_updated`:return`updated project`;case`project_deleted`:return`deleted project`;case`task_created`:return`created task`;case`task_updated`:return`updated task`;case`task_deleted`:return`deleted task`;case`task_completed`:return`completed task`;case`task_status_changed`:return`changed task status`;default:return`updated`}}e.innerHTML=`
    <section class="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Header -->
      <div class="border-b px-5 py-4 sm:px-6 dark:border-slate-800">
        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            Recent Activity
          </h2>

          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Recent updates from your workspace.
          </p>
        </div>
      </div>

      <!-- Activity List -->
      <div class="divide-y dark:divide-slate-800">

        ${r.length>0?r.map(e=>`
                    <article class="flex gap-3 px-5 py-4 sm:px-6">

                      <!-- Avatar -->
                      <div
                        class="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                      >
                        ${e.user?e.user.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase():`U`}
                      </div>

                      <!-- Activity -->
                      <div class="min-w-0 flex-1">

                        <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">

                          <span class="font-semibold text-slate-900 dark:text-white">
                            ${e.user}
                          </span>

                          ${a(e)}

                          <span class="font-semibold text-slate-800 dark:text-slate-100">
                            ${e.target}
                          </span>

                        </p>

                        <div class="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-slate-400 dark:text-slate-500">

                          ${e.project?`
                                <span>
                                  ${e.project}
                                </span>

                                <span>•</span>
                              `:``}

                          <span>
                            ${i(e.createdAt)}
                          </span>

                        </div>

                      </div>

                    </article>
                  `).join(``):`
              <div class="px-5 py-8 text-center sm:px-6">
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  No recent activity yet.
                </p>
              </div>
            `}

      </div>

    </section>
  `}var at=t((()=>{C()}));function M(){let e=document.querySelector(`#app`);if(!e){console.error(`App mount point not found.`);return}e.innerHTML=`
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Welcome -->
      <div id="dashboard-welcome"></div>

      <!-- Statistics -->
      <div id="dashboard-stats" class="mt-6"></div>

      <!-- Projects -->
      <div id="dashboard-projects" class="mt-6"></div>

      <!-- Tasks + Deadlines -->
      <div class="mt-6 grid gap-6 lg:grid-cols-3">

        <div
          id="dashboard-tasks"
          class="lg:col-span-2"
        ></div>

        <div id="dashboard-deadlines"></div>

      </div>

      <!-- Recent Activity -->
      <div
        id="dashboard-activity"
        class="mt-6"
      ></div>

    </div>
  `,ze(),Ae(e=>{let{projects:t}=_();t.unshift(e),y({type:`project_created`,user:h().name,target:e.name}),v()});let t=document.querySelector(`#create-project-button`);t&&t.addEventListener(`click`,Ne),Ke(),Ye(),Qe(),nt(),it()}function ot(){st||=(ie(()=>{(window.location.pathname===`/`||window.location.pathname===`/dashboard`)&&M()}),!0)}var st,ct=t((()=>{C(),Ue(),Je(),Ze(),tt(),rt(),at(),Le(),st=!1}));function lt(e){let t={planning:{label:`Planning`,classes:`bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300`},"in-progress":{label:`In Progress`,classes:`bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`},completed:{label:`Completed`,classes:`bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300`},"on-hold":{label:`On Hold`,classes:`bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300`}},n={low:{label:`Low`,classes:`text-slate-500 dark:text-slate-400`},medium:{label:`Medium`,classes:`text-amber-600 dark:text-amber-400`},high:{label:`High`,classes:`text-red-600 dark:text-red-400`}},{tasks:r,teamMembers:i}=_(),a=t[e.status]||t.planning,o=n[e.priority]||n.medium,s=r.filter(t=>t.projectId===e.id),c=s.filter(e=>e.status===`completed`).length,l=s.length,u=l===0?0:Math.round(c/l*100),d=new Date(e.dueDate).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),f=(e.memberIds||[]).map(e=>i.find(t=>t.id===e)).filter(Boolean);return`
    <article
      class="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
      data-project-id="${e.id}"
    >

      <!-- Top Row -->
      <div class="flex items-start justify-between gap-4">

        <div class="min-w-0">
          <h2 class="truncate text-base font-bold text-slate-900 dark:text-white">
            ${e.name}
          </h2>

          <p class="mt-1 text-xs font-medium ${o.classes}">
            ${o.label} priority
          </p>
        </div>

        <span
          class="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${a.classes}"
        >
          ${a.label}
        </span>

      </div>


      <!-- Description -->
      <p class="mt-4 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        ${e.description}
      </p>


      <!-- Progress -->
      <div class="mt-5">

        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Progress
          </span>

          <span class="text-xs font-bold text-slate-900 dark:text-slate-100">
            ${u}%
          </span>
        </div>

        <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            class="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style="width: ${u}%"
          ></div>
        </div>

      </div>


      <!-- Project Meta -->
      <div
        class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800"
      >

        <!-- Members -->
        <div class="flex items-center">

          <div class="flex -space-x-2">
            ${f.slice(0,4).map(e=>`
                  <div
                    title="${e.name}"
                    class="flex size-8 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[10px] font-bold text-slate-700 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-200"
                  >
                    ${e.initials}
                  </div>
                `).join(``)}
          </div>

          ${f.length>4?`
                <span class="ml-2 text-xs font-medium text-slate-400 dark:text-slate-500">
                  +${f.length-4}
                </span>
              `:``}

        </div>


        <!-- Due Date -->
        <div
          class="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3.75 9h16.5M5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25Z"
            />
          </svg>

          ${d}

        </div>

      </div>


      <!-- Footer -->
      <div class="mt-4 flex items-center justify-between">

        <span class="text-xs text-slate-400 dark:text-slate-500">
          ${c} of ${l} tasks
        </span>

        <div class="flex items-center gap-2">

          <!-- Edit Project -->
          <button
            type="button"
            class="edit-project-btn rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            data-edit-project-id="${e.id}"
          >
            Edit
          </button>

          <!-- View Project -->
          <a
            href="/projects/${e.id}"
            class="project-view-btn rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
          >
            View Project
          </a>

        </div>

      </div>

    </article>
  `}var ut=t((()=>{C()}));function dt(e=[]){let{teamMembers:t}=_(),n=document.querySelector(`#edit-project-members`);n&&(n.innerHTML=t.map(t=>`
        <label
          class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <input
            type="checkbox"
            name="memberIds"
            value="${t.id}"
            ${e.includes(t.id)?`checked`:``}
            class="edit-project-member size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
          />

          <div
            class="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            ${t.initials}
          </div>

          <div class="min-w-0">
            <p
              class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100"
            >
              ${t.name}
            </p>

            <p
              class="truncate text-xs text-slate-500 dark:text-slate-400"
            >
              ${t.role}
            </p>
          </div>
        </label>
      `).join(``))}function ft(e){P=e;let t=document.querySelector(`#edit-project-modal`);t&&t.remove();let n=document.createElement(`div`);n.id=`edit-project-modal`,n.className=`fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm`,n.innerHTML=`
    <div
      class="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700"
      >
        <div>
          <h2
            class="text-lg font-bold text-slate-900 dark:text-white"
          >
            Edit Project
          </h2>

          <p
            class="mt-1 text-sm text-slate-500 dark:text-slate-400"
          >
            Update your project details.
          </p>
        </div>

        <button
          type="button"
          id="close-edit-project-modal"
          class="flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form id="edit-project-form" class="space-y-5 p-6">

        <!-- Project Name -->
        <div>
          <label
            for="edit-project-name"
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Project Name
          </label>

          <input
            id="edit-project-name"
            name="name"
            type="text"
            required
            placeholder="Enter project name"
            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

        <!-- Description -->
        <div>
          <label
            for="edit-project-description"
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Description
          </label>

          <textarea
            id="edit-project-description"
            name="description"
            rows="3"
            placeholder="Describe your project..."
            class="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          ></textarea>
        </div>

        <!-- Status + Priority -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <!-- Status -->
          <div>
            <label
              for="edit-project-status"
              class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Status
            </label>

            <select
              id="edit-project-status"
              name="status"
              required
              class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="planning">Planning</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>

          <!-- Priority -->
          <div>
            <label
              for="edit-project-priority"
              class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Priority
            </label>

            <select
              id="edit-project-priority"
              name="priority"
              required
              class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <!-- Due Date -->
        <div>
          <label
            for="edit-project-due-date"
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Due Date
          </label>

          <input
            id="edit-project-due-date"
            name="dueDate"
            type="date"
            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <!-- Project Members -->
        <div>
          <label
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Project Members
          </label>

          <div
            id="edit-project-members"
            class="mt-2 max-h-40 space-y-2 overflow-y-auto rounded-lg border border-slate-200 p-3 dark:border-slate-700"
          ></div>

          <p
            class="mt-1.5 text-xs text-slate-500 dark:text-slate-400"
          >
            Select the members who will work on this project.
          </p>
        </div>

        <!-- Actions -->
        <div
          class="flex justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-700"
        >
          <button
            type="button"
            id="cancel-edit-project-modal"
            class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `,document.body.appendChild(n);let r=n.querySelector(`#edit-project-form`),i=n.querySelector(`#close-edit-project-modal`),a=n.querySelector(`#cancel-edit-project-modal`);i.addEventListener(`click`,N),a.addEventListener(`click`,N),n.addEventListener(`click`,e=>{e.target===n&&N()}),r.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(r),n=t.get(`name`).trim(),i=t.get(`description`).trim(),a=t.get(`status`),o=t.get(`priority`),s=t.get(`dueDate`),c=t.getAll(`memberIds`).map(Number);if(!n){E(`Project name is required.`,`error`);return}P&&P({id:F,name:n,description:i,status:a,priority:o,dueDate:s,memberIds:c}),N(),E(`Project updated successfully.`,`success`)})}function pt(e){let t=document.querySelector(`#edit-project-modal`);if(!t)return;F=e.id;let n=e.memberIds||[];document.querySelector(`#edit-project-name`).value=e.name||``,document.querySelector(`#edit-project-description`).value=e.description||``,document.querySelector(`#edit-project-status`).value=e.status||`planning`,document.querySelector(`#edit-project-priority`).value=e.priority||`medium`,document.querySelector(`#edit-project-due-date`).value=e.dueDate||``,dt(n),t.classList.remove(`hidden`),t.classList.add(`flex`),document.querySelector(`#edit-project-name`).focus()}function N(){let e=document.querySelector(`#edit-project-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),F=null)}var P,F,mt=t((()=>{O(),C(),P=null,F=null}));function ht(){let e=document.querySelector(`#app`);if(!e){console.error(`App mount point not found.`);return}let{projects:t,tasks:n}=_();e.innerHTML=`
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Page Header -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h1>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and track all your projects in one place.
          </p>
        </div>

        <button
          id="create-project-btn"
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          New Project
        </button>

      </div>

      <!-- Toolbar -->
      <div
        class="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >

        <div class="flex flex-col gap-3 lg:flex-row lg:items-center">

          <!-- Search -->
          <div class="relative flex-1">

            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="currentColor"
                class="size-5 text-slate-400 dark:text-slate-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-4.5-4.5m2-5.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </div>

            <input
              id="project-search"
              type="search"
              placeholder="Search projects..."
              class="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:bg-slate-950 dark:focus:ring-indigo-500/20"
            />

          </div>

          <!-- Status Filter -->
          <select
            id="project-status-filter"
            class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:bg-slate-950 dark:focus:ring-indigo-500/20"
          >
            <option value="all">All Statuses</option>
            <option value="planning">Planning</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>

          <!-- Sort -->
          <select
            id="project-sort"
            class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:bg-slate-950 dark:focus:ring-indigo-500/20"
          >
            <option value="recent">Recently Created</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
            <option value="due-soon">Due Date: Soonest</option>
            <option value="progress-high">Progress: Highest</option>
            <option value="progress-low">Progress: Lowest</option>
          </select>

        </div>

      </div>

      <!-- Project Count -->
      <div class="mt-6">
        <p
          id="project-count"
          class="text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          0 projects
        </p>
      </div>

      <!-- Projects Grid -->
      <div
        id="projects-grid"
        class="mt-3 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
      </div>

    </div>
  `;let r=document.querySelector(`#projects-grid`),i=document.querySelector(`#project-search`),a=document.querySelector(`#project-status-filter`),o=document.querySelector(`#project-sort`),s=document.querySelector(`#project-count`);function c(e){let t=n.filter(t=>t.projectId===e),r=t.filter(e=>e.status===`completed`).length;return t.length===0?0:Math.round(r/t.length*100)}function l(){let e=i.value.trim().toLowerCase(),n=a.value,l=o.value,u=t.filter(t=>{let r=t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e),i=n===`all`||t.status===n;return r&&i});if(u.sort((e,t)=>{switch(l){case`name-asc`:return e.name.localeCompare(t.name);case`name-desc`:return t.name.localeCompare(e.name);case`due-soon`:return new Date(e.dueDate)-new Date(t.dueDate);case`progress-high`:return c(t.id)-c(e.id);case`progress-low`:return c(e.id)-c(t.id);default:return new Date(t.createdAt)-new Date(e.createdAt)}}),s.textContent=`${u.length} ${u.length===1?`project`:`projects`}`,u.length===0){r.innerHTML=`
        <div
          class="col-span-full rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900"
        >

          <div
            class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-6 text-slate-400 dark:text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-4.5-4.5m2-5.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              />
            </svg>
          </div>

          <h2
            class="mt-4 text-sm font-semibold text-slate-900 dark:text-white"
          >
            No projects found
          </h2>

          <p
            class="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400"
          >
            Try changing your search or status filter to find what you're looking for.
          </p>

        </div>
      `;return}r.innerHTML=u.map(e=>lt(e)).join(``)}Ae(e=>{t.unshift(e),y({type:`project_created`,user:h().name,target:e.name}),v(),l()}),ft(e=>{let n=t.findIndex(t=>String(t.id)===String(e.id));if(n===-1){gt();return}t[n]={...t[n],...e},y({type:`project_updated`,user:h().name,target:e.name}),v(),l()}),l(),i.addEventListener(`input`,l),a.addEventListener(`change`,l),o.addEventListener(`change`,l),document.querySelector(`#create-project-btn`).addEventListener(`click`,Ne),r.addEventListener(`click`,e=>{let n=e.target.closest(`.edit-project-btn`);if(!n)return;let r=n.dataset.editProjectId,i=t.find(e=>String(e.id)===String(r));if(!i){gt();return}pt(i)})}function gt(){E(`Project could not be updated.`,`error`)}var _t=t((()=>{C(),ut(),O(),Le(),mt()}));function vt(e){Ct=e;let{projects:t,teamMembers:n}=_();document.querySelector(`#task-modal`)||(L=document.createElement(`div`),L.id=`task-modal`,L.className=`fixed inset-0 z-[90] hidden items-center justify-center p-4`,L.innerHTML=`
    <!-- Backdrop -->
    <div
      class="task-modal-backdrop absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
    ></div>

    <!-- Modal -->
    <div
      class="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-modal-title"
    >

      <!-- Header -->
      <div
        class="flex items-start justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800"
      >

        <div>
          <h2
            id="task-modal-title"
            class="text-lg font-bold text-slate-900 dark:text-white"
          >
            Add Task
          </h2>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Create a new task for this project.
          </p>
        </div>

        <button
          id="close-task-modal"
          type="button"
          class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

      </div>

      <!-- Form -->
      <form id="task-form">

        <div class="space-y-5 px-6 py-5">

          <!-- Title -->
          <div>
            <label
              for="task-title"
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Task title
            </label>

            <input
              id="task-title"
              name="title"
              type="text"
              placeholder="e.g. Design login page"
              autocomplete="off"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>

          <!-- Description -->
          <div>
            <label
              for="task-description"
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Description
            </label>

            <textarea
              id="task-description"
              name="description"
              rows="3"
              placeholder="Describe what needs to be done..."
              class="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            ></textarea>
          </div>

          <!-- Project -->
          <div>
            <label
              for="task-project"
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Project
            </label>

            <select
              id="task-project"
              name="projectId"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="">Select a project</option>

              ${t.map(e=>`
                    <option value="${e.id}">
                      ${e.name}
                    </option>
                  `).join(``)}
            </select>
          </div>

          <!-- Assignee + Priority -->
          <div class="grid gap-5 sm:grid-cols-2">

            <!-- Assignee -->
            <div>
              <label
                for="task-assignee"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Assignee
              </label>

              <select
                id="task-assignee"
                name="assigneeId"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              >
                ${n.map(e=>`
                      <option value="${e.id}" ${e.id===1?`selected`:``}>
                        ${e.name}
                      </option>
                    `).join(``)}
              </select>
            </div>

            <!-- Priority -->
            <div>
              <label
                for="task-priority"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Priority
              </label>

              <select
                id="task-priority"
                name="priority"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              >
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
              </select>
            </div>

          </div>

          <!-- Due Date -->
          <div>
            <label
              for="task-due-date"
              class="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Due date
            </label>

            <input
              id="task-due-date"
              name="dueDate"
              type="date"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

        </div>

        <!-- Footer -->
        <div
          class="flex justify-end gap-2 border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/50"
        >

          <button
            id="cancel-task-modal"
            type="button"
            class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  `,document.body.appendChild(L),yt())}function yt(){let e=L.querySelector(`#close-task-modal`),t=L.querySelector(`#cancel-task-modal`),n=L.querySelector(`.task-modal-backdrop`),r=L.querySelector(`#task-form`);e.addEventListener(`click`,I),t.addEventListener(`click`,I),n.addEventListener(`click`,I),r.addEventListener(`submit`,St),document.addEventListener(`keydown`,xt)}function bt(e=null){if(!L)return;let t=L.querySelector(`#task-project`);t.disabled=!1,t.classList.remove(`pointer-events-none`,`bg-slate-100`),t.removeAttribute(`aria-disabled`),e&&typeof e!=`object`?(t.value=String(e),t.classList.add(`pointer-events-none`,`bg-slate-100`),t.setAttribute(`aria-disabled`,`true`)):t.value=``,L.classList.remove(`hidden`),L.classList.add(`flex`),document.body.classList.add(`overflow-hidden`);let n=L.querySelector(`#task-title`);setTimeout(()=>{n.focus()},50)}function I(){if(!L)return;L.classList.add(`hidden`),L.classList.remove(`flex`),document.body.classList.remove(`overflow-hidden`),L.querySelector(`#task-form`).reset();let e=L.querySelector(`#task-project`);e.disabled=!1,e.classList.remove(`pointer-events-none`,`bg-slate-100`),e.removeAttribute(`aria-disabled`)}function xt(e){e.key===`Escape`&&!L.classList.contains(`hidden`)&&I()}function St(e){e.preventDefault();let t=new FormData(e.currentTarget),n=t.get(`title`).trim(),r=t.get(`description`).trim(),i=t.get(`projectId`),a=t.get(`priority`),o=t.get(`dueDate`),s=Number(t.get(`assigneeId`));if(!n){E(`Please enter a task title.`,`warning`);return}if(!i){E(`Please select a project.`,`warning`);return}if(!o){E(`Please select a due date.`,`warning`);return}let c={id:`task-${Date.now()}`,projectId:i,title:n,description:r||`No description provided.`,status:`todo`,priority:a,dueDate:o,assigneeId:s,createdAt:new Date().toISOString().split(`T`)[0]};Ct&&Ct(c),I(),E(`"${n}" has been created successfully.`,`success`)}var L,Ct,wt=t((()=>{O(),C(),L=null,Ct=null}));function Tt(e){At=e;let t=document.querySelector(`#edit-task-modal`);t&&t.remove(),document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="edit-task-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-lg rounded-2xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-task-modal-title"
        >
          <div
            class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800"
          >
            <div>
              <h2
                id="edit-task-modal-title"
                class="text-base font-bold text-slate-900 dark:text-white"
              >
                Edit Task
              </h2>

              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Update the task details.
              </p>
            </div>

            <button
              id="close-edit-task-modal"
              type="button"
              class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Close edit task modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form id="edit-task-form">
            <div class="space-y-4 px-5 py-5">

              <!-- Title -->
              <div>
                <label
                  for="edit-task-title"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Title
                </label>

                <input
                  id="edit-task-title"
                  name="title"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                  placeholder="Enter task title"
                />
              </div>

              <!-- Description -->
              <div>
                <label
                  for="edit-task-description"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Description
                </label>

                <textarea
                  id="edit-task-description"
                  name="description"
                  rows="4"
                  class="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                  placeholder="Describe the task"
                ></textarea>
              </div>

              <!-- Status + Priority -->
              <div class="grid gap-4 sm:grid-cols-2">

                <!-- Status -->
                <div>
                  <label
                    for="edit-task-status"
                    class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                  >
                    Status
                  </label>

                  <select
                    id="edit-task-status"
                    name="status"
                    class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <!-- Priority -->
                <div>
                  <label
                    for="edit-task-priority"
                    class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                  >
                    Priority
                  </label>

                  <select
                    id="edit-task-priority"
                    name="priority"
                    class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

              </div>

              <!-- Assignee -->
              <div>
                <label
                  for="edit-task-assignee"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Assignee
                </label>

                <select
                  id="edit-task-assignee"
                  name="assigneeId"
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                ></select>
              </div>

              <!-- Due Date -->
              <div>
                <label
                  for="edit-task-due-date"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Due date
                </label>

                <input
                  id="edit-task-due-date"
                  name="dueDate"
                  type="date"
                  required
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

            </div>

            <!-- Footer -->
            <div
              class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"
            >
              <button
                id="cancel-edit-task"
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    `),Dt()}function Et(e=null){let{teamMembers:t}=_(),n=document.querySelector(`#edit-task-assignee`);n&&(n.innerHTML=t.map(t=>`
        <option
          value="${t.id}"
          ${Number(t.id)===Number(e)?`selected`:``}
        >
          ${t.name}
        </option>
      `).join(``))}function Dt(){let e=document.querySelector(`#edit-task-modal`),t=document.querySelector(`#edit-task-form`),n=document.querySelector(`#close-edit-task-modal`),r=document.querySelector(`#cancel-edit-task`);!e||!t||!n||!r||(n.addEventListener(`click`,kt),r.addEventListener(`click`,kt),e.addEventListener(`click`,t=>{t.target===e&&kt()}),t.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(t),r=n.get(`title`).trim(),i=n.get(`description`).trim()||`No description provided.`,a=n.get(`status`),o=n.get(`priority`),s=n.get(`dueDate`),c=n.get(`assigneeId`),l={id:jt,projectId:R,title:r,description:i,status:a,priority:o,dueDate:s,assigneeId:c?Number(c):null};if(!l.title||!l.dueDate){E(`Please fill in all required fields.`,`error`);return}At&&At(l),kt(),E(`Task updated successfully.`,`success`)}))}function Ot(e){let t=document.querySelector(`#edit-task-modal`);t&&(jt=e.id,R=e.projectId,document.querySelector(`#edit-task-title`).value=e.title||``,document.querySelector(`#edit-task-description`).value=e.description||``,document.querySelector(`#edit-task-status`).value=e.status||`todo`,document.querySelector(`#edit-task-priority`).value=e.priority||`medium`,document.querySelector(`#edit-task-due-date`).value=e.dueDate||``,Et(e.assigneeId??null),t.classList.remove(`hidden`),t.classList.add(`flex`),document.querySelector(`#edit-task-title`).focus())}function kt(){let e=document.querySelector(`#edit-task-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),jt=null,R=null)}var At,jt,R,Mt=t((()=>{O(),C(),At=null,jt=null,R=null}));function Nt(e){Lt=e;let t=document.querySelector(`#delete-task-modal`);t&&t.remove(),document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="delete-task-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-task-modal-title"
        >
          <div class="px-5 py-5">
            <div class="flex items-start gap-4">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
                  stroke="currentColor"
                  class="size-5 text-red-600 dark:text-red-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m0 3.75h.007v.007H12v-.007ZM3.75 18.75h16.5L12 3.75 3.75 18.75Z"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <h2
                  id="delete-task-modal-title"
                  class="text-base font-bold text-slate-900 dark:text-white"
                >
                  Delete task?
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Are you sure you want to delete
                  <span
                    id="delete-task-name"
                    class="font-semibold text-slate-700 dark:text-slate-200"
                  ></span>?
                  This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"
          >
            <button
              id="cancel-delete-task"
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Cancel
            </button>

            <button
              id="confirm-delete-task"
              type="button"
              class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    `),Pt()}function Pt(){let e=document.querySelector(`#delete-task-modal`),t=document.querySelector(`#cancel-delete-task`),n=document.querySelector(`#confirm-delete-task`);t.addEventListener(`click`,It),e.addEventListener(`click`,t=>{t.target===e&&It()}),n.addEventListener(`click`,()=>{z&&=(Lt&&Lt(z),It(),E(`Task deleted successfully.`,`success`),null)})}function Ft(e){let t=document.querySelector(`#delete-task-modal`),n=document.querySelector(`#delete-task-name`);!t||!n||(z=e,n.textContent=`"${e.title}"`,t.classList.remove(`hidden`),t.classList.add(`flex`))}function It(){let e=document.querySelector(`#delete-task-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),z=null)}var Lt,z,Rt=t((()=>{O(),Lt=null,z=null}));function B(){Bt||=(ie(()=>{window.location.pathname===`/tasks`&&B()}),!0);let e=document.querySelector(`#app`);if(!e){console.error(`App mount point not found.`);return}let{tasks:t,projects:n,teamMembers:r}=_(),i=t.filter(e=>{let t=V.search.toLowerCase(),n=e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t),r=V.status===`all`||e.status===V.status,i=V.priority===`all`||e.priority===V.priority,a=V.project===`all`||e.projectId===V.project;return n&&r&&i&&a}),a=[...i].sort((e,t)=>{switch(V.sort){case`oldest`:return new Date(e.createdAt)-new Date(t.createdAt);case`due-asc`:return new Date(e.dueDate)-new Date(t.dueDate);case`due-desc`:return new Date(t.dueDate)-new Date(e.dueDate);case`priority-high`:{let n={high:3,medium:2,low:1};return n[t.priority]-n[e.priority]}case`priority-low`:{let n={high:3,medium:2,low:1};return n[e.priority]-n[t.priority]}default:return new Date(t.createdAt)-new Date(e.createdAt)}}),o=Math.ceil(a.length/zt);o>0&&H>o&&(H=o);let s=(H-1)*zt,c=s+zt,l=a.slice(s,c);e.innerHTML=`
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
  Tasks
</h1>

<div class="mt-1 flex flex-wrap items-center gap-2">
  <p class="text-sm text-slate-500 dark:text-slate-400">
    Manage and track all tasks across your projects.
  </p>

  <span class="text-slate-300 dark:text-slate-700">•</span>

  <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">
    ${i.length}
    ${i.length===1?`task`:`tasks`}
  </span>
</div>
        </div>

        <button
          id="add-task-btn"
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          Add Task
        </button>

      </div>


      <!-- Task Summary -->
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Tasks
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            ${t.length}
          </p>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            To Do
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            ${t.filter(e=>e.status===`todo`).length}
          </p>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            In Progress
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            ${t.filter(e=>e.status===`in-progress`).length}
          </p>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            Completed
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            ${t.filter(e=>e.status===`completed`).length}
          </p>
        </div>

      </div>


      <!-- Task List -->
      <div class="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

       <div class="border-b border-slate-200 px-5 py-4 dark:border-slate-800">
  <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    <div>
      <h2 class="text-sm font-bold text-slate-900 dark:text-white">
        All Tasks
      </h2>

      <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
        ${t.length} tasks across ${n.length} projects
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-col gap-2 sm:flex-row">

      <!-- Search -->
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>

        <input
          id="task-search"
          type="search"
           value="${V.search}"
          placeholder="Search tasks..."
          class="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:w-56 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      <!-- Status -->
      <select
        id="task-status-filter"
        class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
      >
        <option value="all" ${V.status===`all`?`selected`:``}>
  All Status
</option>

<option value="todo" ${V.status===`todo`?`selected`:``}>
  To Do
</option>

<option value="in-progress" ${V.status===`in-progress`?`selected`:``}>
  In Progress
</option>

<option value="completed" ${V.status===`completed`?`selected`:``}>
  Completed
</option>
      </select>

      <!-- Priority -->
      <select
        id="task-priority-filter"
        class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
      >
       <option value="all" ${V.priority===`all`?`selected`:``}>
  All Priority
</option>

<option value="high" ${V.priority===`high`?`selected`:``}>
  High
</option>

<option value="medium" ${V.priority===`medium`?`selected`:``}>
  Medium
</option>

<option value="low" ${V.priority===`low`?`selected`:``}>
  Low
</option>
      </select>
      <select
  id="task-project-filter"
  class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
>
  <option
    value="all"
    ${V.project===`all`?`selected`:``}
  >
    All Projects
  </option>

  ${n.map(e=>`
        <option
          value="${e.id}"
          ${V.project===e.id?`selected`:``}
        >
          ${e.name}
        </option>
      `).join(``)}
</select>
<select
  id="task-sort"
  class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
>
  <option
    value="newest"
    ${V.sort===`newest`?`selected`:``}
  >
    Newest
  </option>

  <option
    value="oldest"
    ${V.sort===`oldest`?`selected`:``}
  >
    Oldest
  </option>

  <option
    value="due-asc"
    ${V.sort===`due-asc`?`selected`:``}
  >
    Due Date ↑
  </option>

  <option
    value="due-desc"
    ${V.sort===`due-desc`?`selected`:``}
  >
    Due Date ↓
  </option>

  <option
    value="priority-high"
    ${V.sort===`priority-high`?`selected`:``}
  >
    Priority: High → Low
  </option>

  <option
    value="priority-low"
    ${V.sort===`priority-low`?`selected`:``}
  >
    Priority: Low → High
  </option>
</select>

    </div>
  </div>
</div>


        <div class="divide-y divide-slate-100 dark:divide-slate-800">

      ${i.length===0?`
      <div class="px-5 py-12 text-center">

        <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.045 6.045a7.5 7.5 0 0 0 10.605 10.605Z"
            />
          </svg>
        </div>

        <p class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
          No tasks found
        </p>

        <p class="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
          Try adjusting your search or filters to find what you're looking for.
        </p>

        <button
          id="clear-task-filters"
          type="button"
          class="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
        >
          Clear Filters
        </button>

      </div>
    `:l.map(e=>{let t=n.find(t=>t.id===e.projectId),i=r.find(t=>t.id===e.assigneeId);return`
                      <div
                      class="flex flex-col gap-4 px-5 py-4 transition hover:bg-slate-50 dark:hover:bg-slate-800/50 sm:flex-row sm:items-center sm:justify-between"
                      >

                        <!-- Task Info -->
                        <div class="min-w-0 flex-1">

                          <div class="flex items-start gap-3">

                            <!-- Completion -->
                            <button
                              type="button"
                              class="task-complete-btn mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition ${e.status===`completed`?`border-indigo-600 bg-indigo-600 text-white`:`border-slate-300 bg-white text-transparent hover:border-indigo-400 dark:border-slate-600 dark:bg-slate-900`}"
                              data-task-id="${e.id}"
                              aria-label="${e.status===`completed`?`Mark task as incomplete`:`Mark task as complete`}"
                            >
                              ${e.status===`completed`?`
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="2.5"
                                      stroke="currentColor"
                                      class="size-3.5"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m5 12 4 4L19 6"
                                      />
                                    </svg>
                                  `:``}
                            </button>


                            <div class="min-w-0">

                              <h3
                                class="truncate text-sm font-semibold ${e.status===`completed`?`text-slate-400 line-through`:`text-slate-900 dark:text-slate-200`}"
                              >
                                ${e.title}
                              </h3>

                            <p class="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                                ${e.description}
                              </p>


                              <!-- Meta -->
                              <div class="mt-3 flex flex-wrap items-center gap-2">

                                ${t?`
                                      <span class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                        ${t.name}
                                      </span>
                                    `:``}

                               <span
  class="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${e.priority===`high`?`bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400`:e.priority===`medium`?`bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400`:`bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400`}"
>
  <span
    class="size-1.5 rounded-full ${e.priority===`high`?`bg-red-500`:e.priority===`medium`?`bg-amber-500`:`bg-slate-400`}"
  ></span>

  ${e.priority.charAt(0).toUpperCase()+e.priority.slice(1)}
</span>

                                <span
                                  class="rounded-md px-2 py-1 text-xs font-medium ${e.status===`completed`?`bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400`:e.status===`in-progress`?`bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400`:`bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400`}"
                                >
                                  ${e.status===`in-progress`?`In Progress`:e.status===`completed`?`Completed`:`To Do`}
                                </span>

                            <span class="text-xs text-slate-400 dark:text-slate-500">
                                  Due ${e.dueDate}
                                </span>

                              </div>

                            </div>

                          </div>

                        </div>


                        <!-- Actions + Assignee -->
<div class="flex shrink-0 items-center gap-4">

  <!-- Assignee -->
  ${i?`
        <div class="flex items-center gap-2">
          <div
         class="flex size-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
            title="${i.name}"
          >
            ${i.initials}
          </div>

          <span class="text-sm font-medium text-slate-600 dark:text-slate-300">
            ${i.name}
          </span>
        </div>
      `:``}

  <!-- Edit -->
  <button
    type="button"
  class="edit-task-btn rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
    data-task-id="${e.id}"
    aria-label="Edit task"
    title="Edit task"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.8"
      stroke="currentColor"
      class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 7.125 16.875 4.5"
      />
    </svg>
  </button>
  <!-- Delete -->
<button
  type="button"
  class="delete-task-btn rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-red-600 dark:hover:bg-slate-800 dark:hover:text-red-400"
  data-task-id="${e.id}"
  aria-label="Delete task"
  title="Delete task"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.8"
    stroke="currentColor"
    class="size-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 7.5h12m-10.5 0v10.125A1.875 1.875 0 0 0 9.375 19.5h5.25a1.875 1.875 0 0 0 1.875-1.875V7.5m-6.75 0V5.625A1.125 1.125 0 0 1 10.875 4.5h2.25A1.125 1.125 0 0 1 14.25 5.625V7.5"
    />
  </svg>
</button>

</div>

                      </div>
                    `}).join(``)}
            ${a.length>0?`
      <div class="flex flex-col gap-3 border-t border-slate-200 dark:border-slate-800 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

        <!-- Results Info -->
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Showing
          <span class="font-semibold text-slate-700 dark:text-slate-200">
            ${s+1}
          </span>
          -
          <span class="font-semibold text-slate-700 dark:text-slate-200">
            ${Math.min(c,a.length)}
          </span>
          of
          <span class="font-semibold text-slate-700 dark:text-slate-200">
            ${a.length}
          </span>
          tasks
        </p>


        <!-- Pagination Controls -->
        <div class="flex items-center gap-1">

          <!-- Previous -->
          <button
            id="previous-task-page"
            type="button"
           class="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            ${H===1?`disabled`:``}
          >
            Previous
          </button>


          <!-- Page Numbers -->
          ${Array.from({length:o},(e,t)=>{let n=t+1;return`
                <button
                  type="button"
                  class="task-page-btn rounded-lg px-3 py-2 text-xs font-semibold transition ${H===n?`bg-indigo-600 text-white`:`text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800`}"
                  data-page="${n}"
                >
                  ${n}
                </button>
              `}).join(``)}


          <!-- Next -->
          <button
            id="next-task-page"
            type="button"
           class="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            ${H===o?`disabled`:``}
          >
            Next
          </button>

        </div>

      </div>
    `:``}

        </div>




      </div>

    </div>
  `,vt(e=>{t.unshift(e),y({type:`task_created`,user:h().name,target:e.title}),v(),B()}),Tt(e=>{let n=t.findIndex(t=>t.id===e.id);n!==-1&&(t[n]=e,y({type:`task_updated`,user:h().name,target:e.title}),v(),B())}),Nt(e=>{let n=t.findIndex(t=>t.id===e.id);n!==-1&&(y({type:`task_deleted`,user:h().name,target:e.title}),t.splice(n,1),v(),B())}),document.querySelectorAll(`.edit-task-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.taskId,r=t.find(e=>e.id===n);r&&Ot(r)})}),document.querySelectorAll(`.delete-task-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.taskId,r=t.find(e=>e.id===n);r&&Ft(r)})}),document.querySelector(`#add-task-btn`)?.addEventListener(`click`,()=>{bt()}),document.querySelectorAll(`.task-complete-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.taskId,r=t.find(e=>e.id===n);r&&(r.status=r.status===`completed`?`todo`:`completed`,r.status===`completed`?y({type:`task_completed`,user:h().name,target:r.title}):y({type:`task_status_changed`,user:h().name,target:r.title}),v(),B())})});let u=document.querySelector(`#task-search`),d=document.querySelector(`#task-status-filter`),f=document.querySelector(`#task-priority-filter`),ee=document.querySelector(`#task-project-filter`),p=document.querySelector(`#task-sort`);u?.addEventListener(`input`,e=>{V.search=e.target.value,H=1,B();let t=document.querySelector(`#task-search`);t&&(t.focus(),t.setSelectionRange(t.value.length,t.value.length))}),d?.addEventListener(`change`,e=>{V.status=e.target.value,H=1,B()}),f?.addEventListener(`change`,e=>{V.priority=e.target.value,H=1,B()}),ee?.addEventListener(`change`,e=>{V.project=e.target.value,H=1,B()}),p?.addEventListener(`change`,e=>{V.sort=e.target.value,H=1,B()});let te=document.querySelector(`#previous-task-page`),m=document.querySelector(`#next-task-page`),ne=document.querySelectorAll(`.task-page-btn`);te?.addEventListener(`click`,()=>{H<=1||(--H,B())}),m?.addEventListener(`click`,()=>{H>=o||(H+=1,B())}),ne.forEach(e=>{e.addEventListener(`click`,()=>{H=Number(e.dataset.page),B()})}),document.querySelector(`#clear-task-filters`)?.addEventListener(`click`,()=>{V={search:``,status:`all`,priority:`all`,project:`all`,sort:`newest`},H=1,B()})}var V,H,zt,Bt,Vt=t((()=>{C(),wt(),Mt(),Rt(),V={search:``,status:`all`,priority:`all`,project:`all`,sort:`newest`},H=1,zt=10,Bt=!1})),Ht,Ut,Wt,Gt,Kt=t((()=>{Ht=`modulepreload`,Ut=function(e){return`/`+e},Wt={},Gt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ut(t,n),t=s(t),t in Wt)return;Wt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ht,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function qt(){let{projects:e,tasks:t}=_(),n=e.filter(e=>e.dueDate).map(e=>({id:`project-${e.id}`,type:`project`,title:e.name,date:e.dueDate,projectId:e.id})),r=t.filter(e=>e.dueDate).map(e=>({id:e.id,type:`task`,title:e.title,date:e.dueDate,projectId:e.projectId,status:e.status,priority:e.priority}));return[...n,...r]}function Jt(){Yt||=(ie(()=>{window.location.pathname===`/calendar`&&U()}),!0)}function U(){Jt();let e=document.querySelector(`#app`);if(!e)return;let t=qt();e.innerHTML=`
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
            Calendar
          </h1>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            View and manage your project deadlines and tasks.
          </p>
        </div>

        <button
          id="today-calendar-btn"
          type="button"
          class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Today
        </button>

      </div>


      <!-- Calendar -->
      <div
        class="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >

        <!-- Calendar Header -->
        <div
          class="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800"
        >

          <button
            id="previous-calendar-month"
            type="button"
            class="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Previous month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.75 19.5-7.5-7.5 7.5-7.5"
              />
            </svg>
          </button>


          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            ${W.toLocaleDateString(`en-US`,{month:`long`,year:`numeric`})}
          </h2>


          <button
            id="next-calendar-month"
            type="button"
            class="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Next month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-5"
            >
              <path
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

        </div>


        <!-- Weekdays -->
        <div class="grid grid-cols-7 border-b border-slate-200 dark:border-slate-800">

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Sun
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Mon
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Tue
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Wed
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Thu
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Fri
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            Sat
          </div>

        </div>


     <!-- Calendar Grid -->
<div class="overflow-x-auto">
  <div class="min-w-[900px]">
    <div class="grid grid-cols-7">

      ${(()=>{let e=W.getFullYear(),n=W.getMonth(),r=new Date(e,n,1).getDay(),i=new Date(e,n+1,0).getDate(),a=Math.ceil((r+i)/7)*7;return Array.from({length:a},(a,o)=>{let s=o-r+1,c=s>=1&&s<=i,l=c?`${e}-${String(n+1).padStart(2,`0`)}-${String(s).padStart(2,`0`)}`:``,u=t.filter(e=>e.date===l);return`
            <div
              class="group min-h-28 border-b border-r border-slate-100 p-3 transition-colors dark:border-slate-800 ${c?`bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/50`:`bg-slate-50 dark:bg-slate-950`}"
            >

              ${c?`
                    ${(()=>{let t=new Date;return`
                        <span
                          class="flex size-7 items-center justify-center rounded-full text-sm font-medium ${c&&s===t.getDate()&&n===t.getMonth()&&e===t.getFullYear()?`bg-indigo-600 text-white`:`text-slate-700 dark:text-slate-200`}"
                        >
                          ${s}
                        </span>
                      `})()}

                    ${u.length>0?`
                          <div class="mt-2 space-y-1">
                            ${u.slice(0,3).map(e=>`
                                  <div
                                    class="calendar-event flex cursor-pointer items-center gap-1.5 truncate rounded-md px-2 py-1 text-xs font-medium transition hover:opacity-80 ${e.type===`project`?`bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`:`bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300`}"
                                    data-event-type="${e.type}"
                                    data-event-id="${e.id}"
                                    data-project-id="${e.projectId}"
                                    title="${e.title}"
                                  >
                                    ${e.type===`project`?`
                                          <span class="size-1.5 shrink-0 rounded-full bg-indigo-500"></span>
                                        `:`
                                          <span
                                            class="size-1.5 shrink-0 rounded-full ${e.priority===`high`?`bg-red-500`:e.priority===`medium`?`bg-amber-500`:`bg-slate-400`}"
                                          ></span>
                                        `}

                                    <span class="truncate">
                                      ${e.title}
                                    </span>
                                  </div>
                                `).join(``)}

                            ${u.length>3?`
                                  <div
                                    class="calendar-more cursor-pointer px-2 pt-0.5 text-xs font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                                    data-date="${l}"
                                  >
                                    + ${u.length-3} more
                                  </div>
                                `:``}
                          </div>
                        `:``}
                  `:``}

            </div>
          `}).join(``)})()}
             </div>
        </div>
        </div>

        <!-- Calendar Legend -->
        <div
          class="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200 px-4 py-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400"
        >
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-full bg-indigo-500"></span>
            <span>Project</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="size-2 rounded-full bg-red-500"></span>
            <span>High priority</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="size-2 rounded-full bg-amber-500"></span>
            <span>Medium priority</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="size-2 rounded-full bg-slate-400"></span>
            <span>Low priority</span>
          </div>
        </div>


  `;function n(e,t){G?.remove();let n=new Date(`${t}T00:00:00`).toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`,year:`numeric`});G=document.createElement(`div`),G.innerHTML=`
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
        data-calendar-modal-backdrop
      >
        <div
          class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendar-events-title"
        >

          <div
            class="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800"
          >
            <div>
              <h2
                id="calendar-events-title"
                class="text-base font-semibold text-slate-900 dark:text-white"
              >
                ${n}
              </h2>

              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                ${e.length} ${e.length===1?`event`:`events`}
              </p>
            </div>

            <button
              type="button"
              data-calendar-modal-close
              class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>


          <div class="max-h-[60vh] space-y-2 overflow-y-auto p-5">

            ${e.map(e=>`
                  <div
                    class="calendar-modal-event flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                    data-project-id="${e.projectId}"
                  >

                    <span
                      class="size-2 shrink-0 rounded-full ${e.type===`project`?`bg-indigo-500`:e.priority===`high`?`bg-red-500`:e.priority===`medium`?`bg-amber-500`:`bg-slate-400`}"
                    ></span>

                    <div class="min-w-0 flex-1">
                      <p
                        class="truncate text-sm font-medium text-slate-900 dark:text-slate-100"
                      >
                        ${e.title}
                      </p>

                      <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        ${e.type===`project`?`Project deadline`:`Task deadline`}
                      </p>
                    </div>

                  </div>
                `).join(``)}

          </div>

        </div>
      </div>
    `,document.body.appendChild(G);let r=()=>{G?.remove(),G=null};G.querySelector(`[data-calendar-modal-close]`)?.addEventListener(`click`,r),G.querySelector(`[data-calendar-modal-backdrop]`)?.addEventListener(`click`,e=>{e.target===e.currentTarget&&r()}),G.querySelectorAll(`.calendar-modal-event`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.projectId;t&&(r(),window.history.pushState({},``,`/projects/${t}`),Gt(async()=>{let{router:e}=await Promise.resolve().then(()=>(Q(),Qn));return{router:e}},void 0).then(({router:e})=>{e()}))})})}document.querySelector(`#previous-calendar-month`)?.addEventListener(`click`,()=>{W.setMonth(W.getMonth()-1),U()}),document.querySelector(`#next-calendar-month`)?.addEventListener(`click`,()=>{W.setMonth(W.getMonth()+1),U()}),document.querySelector(`#today-calendar-btn`)?.addEventListener(`click`,()=>{W=new Date,U()}),document.querySelectorAll(`.calendar-event`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.projectId;t&&(window.history.pushState({},``,`/projects/${t}`),Gt(async()=>{let{router:e}=await Promise.resolve().then(()=>(Q(),Qn));return{router:e}},void 0).then(({router:e})=>{e()}))})}),document.querySelectorAll(`.calendar-more`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.date;r&&n(t.filter(e=>e.date===r),r)})})}var W,G,Yt,Xt=t((()=>{C(),Kt(),W=new Date,G=null,Yt=!1}));function Zt(e){nn=e;let t=document.querySelector(`#member-modal`);t&&t.remove(),document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="member-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
        >
          <div
            class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800"
          >
            <div>
              <h2
                id="member-modal-title"
                class="text-lg font-bold text-slate-900 dark:text-white"
              >
                Add Team Member
              </h2>

              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Add a new member to your workspace.
              </p>
            </div>

            <button
              id="close-member-modal"
              type="button"
              aria-label="Close modal"
              class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>


          <form id="member-form">

            <div class="space-y-4 px-5 py-5">

              <!-- Name -->
              <div>
                <label
                  for="member-name"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>

                <input
                  id="member-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                />
              </div>


              <!-- Email -->
              <div>
                <label
                  for="member-email"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Email
                </label>

                <input
                  id="member-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                />
              </div>


              <!-- Role -->
              <div>
                <label
                  for="member-role"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Role
                </label>

                <select
                  id="member-role"
                  name="role"
                  class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:ring-indigo-500/20"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

            </div>


            <div
              class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"
            >
              <button
                id="cancel-member-modal"
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Add Member
              </button>
            </div>

          </form>
        </div>
      </div>
    `),Qt()}function Qt(){let e=document.querySelector(`#member-modal`),t=document.querySelector(`#member-form`),n=document.querySelector(`#close-member-modal`),r=document.querySelector(`#cancel-member-modal`);n.addEventListener(`click`,tn),r.addEventListener(`click`,tn),e.addEventListener(`click`,t=>{t.target===e&&tn()}),t.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(t),r=n.get(`name`).trim(),i=n.get(`email`).trim(),a=n.get(`role`),o={id:Date.now(),name:r,email:i,role:a,initials:$t(r),status:`active`};nn&&nn(o),tn(),E(`Team member added successfully.`,`success`),t.reset()})}function $t(e){return e.split(` `).filter(Boolean).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}function en(){let e=document.querySelector(`#member-modal`);e&&(e.classList.remove(`hidden`),e.classList.add(`flex`),document.querySelector(`#member-name`)?.focus())}function tn(){let e=document.querySelector(`#member-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`))}var nn,rn=t((()=>{O(),nn=null}));function an(e){un=e;let t=document.querySelector(`#edit-member-modal`);t&&t.remove(),document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="edit-member-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-member-modal-title"
        >
          <div
            class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800"
          >
            <div>
              <h2
                id="edit-member-modal-title"
                class="text-lg font-bold text-slate-900 dark:text-white"
              >
                Edit Team Member
              </h2>

              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Update this member's information.
              </p>
            </div>

            <button
              id="close-edit-member-modal"
              type="button"
              aria-label="Close modal"
              class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>


          <form id="edit-member-form">

            <div class="space-y-4 px-5 py-5">

              <!-- Name -->
              <div>
                <label
                  for="edit-member-name"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>

                <input
                  id="edit-member-name"
                  name="name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                />
              </div>


              <!-- Email -->
              <div>
                <label
                  for="edit-member-email"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Email
                </label>

                <input
                  id="edit-member-email"
                  name="email"
                  type="email"
                  required
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                />
              </div>


              <!-- Role -->
              <div>
                <label
                  for="edit-member-role"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Role
                </label>

                <select
                  id="edit-member-role"
                  name="role"
                  class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:ring-indigo-500/20"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>


              <!-- Status -->
              <div>
                <label
                  for="edit-member-status"
                  class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Status
                </label>

                <select
                  id="edit-member-status"
                  name="status"
                  class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:ring-indigo-500/20"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

            </div>


            <div
              class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"
            >
              <button
                id="cancel-edit-member"
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    `),on()}function on(){let e=document.querySelector(`#edit-member-modal`),t=document.querySelector(`#edit-member-form`),n=document.querySelector(`#close-edit-member-modal`),r=document.querySelector(`#cancel-edit-member`);n.addEventListener(`click`,ln),r.addEventListener(`click`,ln),e.addEventListener(`click`,t=>{t.target===e&&ln()}),t.addEventListener(`submit`,e=>{if(e.preventDefault(),K===null)return;let n=new FormData(t),r={id:K,name:n.get(`name`).trim(),email:n.get(`email`).trim(),role:n.get(`role`),status:n.get(`status`)};r.initials=sn(r.name),un&&un(r),ln(),E(`Team member updated successfully.`,`success`)})}function sn(e){return e.split(` `).filter(Boolean).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}function cn(e){let t=document.querySelector(`#edit-member-modal`);t&&(K=e.id,document.querySelector(`#edit-member-name`).value=e.name,document.querySelector(`#edit-member-email`).value=e.email,document.querySelector(`#edit-member-role`).value=e.role,document.querySelector(`#edit-member-status`).value=e.status,t.classList.remove(`hidden`),t.classList.add(`flex`),document.querySelector(`#edit-member-name`)?.focus())}function ln(){let e=document.querySelector(`#edit-member-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),K=null)}var un,K,dn=t((()=>{O(),un=null,K=null}));function fn(e){gn=e;let t=document.querySelector(`#delete-member-modal`);t&&t.remove(),document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="delete-member-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-member-modal-title"
        >
          <div class="px-5 py-5">
            <div class="flex items-start gap-4">

              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9.303 3.376L13.697 4.5a1.969 1.969 0 0 0-3.394 0l-7.606 11.626A1.969 1.969 0 0 0 4.394 19.5h15.212a1.969 1.969 0 0 0 1.697-3.374ZM12 16.5h.007v.007H12V16.5Z"
                  />
                </svg>
              </div>

              <div class="min-w-0">

                <h2
                  id="delete-member-modal-title"
                  class="text-base font-bold text-slate-900 dark:text-white"
                >
                  Remove team member?
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Are you sure you want to remove
                  <span
                    id="delete-member-name"
                    class="font-semibold text-slate-700 dark:text-slate-200"
                  ></span>
                  from the team?
                </p>

                <p class="mt-2 text-sm leading-6 text-red-600 dark:text-red-400">
                  This action cannot be undone.
                </p>

              </div>
            </div>
          </div>

          <div
            class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"
          >
            <button
              id="cancel-delete-member"
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Cancel
            </button>

            <button
              id="confirm-delete-member"
              type="button"
              class="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Remove Member
            </button>
          </div>

        </div>
      </div>
    `),pn()}function pn(){let e=document.querySelector(`#delete-member-modal`),t=document.querySelector(`#cancel-delete-member`),n=document.querySelector(`#confirm-delete-member`);t.addEventListener(`click`,hn),e.addEventListener(`click`,t=>{t.target===e&&hn()}),n.addEventListener(`click`,()=>{q&&=(gn&&gn(q),hn(),E(`Team member removed successfully.`,`success`),null)})}function mn(e){let t=document.querySelector(`#delete-member-modal`),n=document.querySelector(`#delete-member-name`);!t||!n||(q=e,n.textContent=`"${e.name}"`,t.classList.remove(`hidden`),t.classList.add(`flex`))}function hn(){let e=document.querySelector(`#delete-member-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),q=null)}var gn,q,_n=t((()=>{O(),gn=null,q=null}));function J(){bn||=(ie(()=>{window.location.pathname===`/team`&&J()}),!0);let e=document.querySelector(`#app`);if(!e){console.error(`App mount point not found.`);return}let{teamMembers:t,projects:n,tasks:r}=_();e.innerHTML=`
    <div class="mx-auto max-w-7xl p-5">

      <!-- Header -->
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Team
          </h1>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your team members and their roles.
          </p>
        </div>

        <button
          id="add-team-member-btn"
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          Add Member
        </button>
      </div>

      <!-- Team Grid -->
      <div
        id="team-grid"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        ${t.map(vn).join(``)}
      </div>

    </div>
  `,Zt(e=>{t.push(e),v(),J()}),an(e=>{let n=t.findIndex(t=>t.id===e.id);n!==-1&&(t[n]=e,v(),J())}),fn(e=>{let i=t.findIndex(t=>t.id===e.id);if(i===-1)return;let a=e.id;n.forEach(e=>{e.memberIds=(e.memberIds||[]).filter(e=>e!==a)}),r.forEach(e=>{e.assigneeId===a&&(e.assigneeId=null)}),t.splice(i,1),v(),J()}),yn(t)}function vn(e){return`
    <article
      class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div class="flex items-start justify-between">

        <div class="flex items-center gap-3">
          <div
            class="flex size-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            ${e.initials}
          </div>

          <div class="min-w-0">
            <h2 class="truncate text-sm font-bold text-slate-900 dark:text-white">
              ${e.name}
            </h2>

            <p class="truncate text-xs text-slate-500 dark:text-slate-400">
              ${e.email}
            </p>
          </div>
        </div>


        <div class="flex items-center gap-1">

          <span
            class="rounded-full ${e.status===`active`?`bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300`:`bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400`} px-2.5 py-1 text-xs font-semibold"
          >
            ${e.status}
          </span>


          <button
            type="button"
            data-edit-member-id="${e.id}"
            class="edit-member-btn rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label="Edit ${e.name}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487 19.5 7.125M18.5 2.5a2.121 2.121 0 0 1 3 3L7 20l-4 1 1-4L18.5 2.5Z"
              />
            </svg>
          </button>


          <button
            type="button"
            data-delete-member-id="${e.id}"
            class="delete-member-btn rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400"
            aria-label="Remove ${e.name}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.756 0a48.108 48.108 0 0 1 3.478-.397m7.5 0V4.75c0-1.18-.91-2.15-2.09-2.244a48.11 48.11 0 0 0-3.32 0C7.91 2.6 7 3.57 7 4.75v.643m7.5 0a48.11 48.11 0 0 1-7.5 0"
              />
            </svg>
          </button>

        </div>
      </div>


      <div class="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
        <p class="text-xs font-medium uppercase tracking-wide text-slate-400">
          Role
        </p>

        <p class="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
          ${e.role}
        </p>
      </div>

    </article>
  `}function yn(e){document.querySelector(`#add-team-member-btn`).addEventListener(`click`,en),document.querySelector(`#team-grid`).addEventListener(`click`,t=>{let n=t.target.closest(`.edit-member-btn`);if(n){let t=Number(n.dataset.editMemberId),r=e.find(e=>e.id===t);if(!r)return;cn(r);return}let r=t.target.closest(`.delete-member-btn`);if(!r)return;let i=Number(r.dataset.deleteMemberId),a=e.find(e=>e.id===i);a&&mn(a)})}var bn,xn=t((()=>{C(),rn(),dn(),_n(),bn=!1}));function Sn(){let e=localStorage.getItem(zn);if(!e)return Bn;try{return{...Bn,...JSON.parse(e)}}catch{return Bn}}function Cn(e){localStorage.setItem(zn,JSON.stringify(e))}function wn(e){let t=Sn();e.innerHTML=`
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div class="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 class="text-base font-semibold text-slate-900 dark:text-white">
          Notifications
        </h2>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Choose how you want to receive notifications.
        </p>
      </div>

      <form id="notifications-form">

        <!-- Email Notifications -->
        <div class="border-b border-slate-200 p-6 dark:border-slate-800">

          <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
            Email notifications
          </h3>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Receive important updates through email.
          </p>

          <div class="mt-5 space-y-4">

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Task assignments
                </p>

                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Get notified when a task is assigned to you.
                </p>
              </div>

              <input
                type="checkbox"
                name="taskAssignments"
                ${t.taskAssignments?`checked`:``}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-950 dark:focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Task updates
                </p>

                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Receive updates when tasks assigned to you change.
                </p>
              </div>

              <input
                type="checkbox"
                name="taskUpdates"
                ${t.taskUpdates?`checked`:``}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-950 dark:focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Project updates
                </p>

                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Receive important updates about your projects.
                </p>
              </div>

              <input
                type="checkbox"
                name="projectUpdates"
                ${t.projectUpdates?`checked`:``}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-950 dark:focus:ring-indigo-500"
              />
            </label>

          </div>
        </div>

        <!-- In-App Notifications -->
        <div class="p-6">

          <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
            In-app notifications
          </h3>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Control which notifications appear inside Flowboard.
          </p>

          <div class="mt-5 space-y-4">

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Mentions
                </p>

                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Get notified when someone mentions you.
                </p>
              </div>

              <input
                type="checkbox"
                name="mentions"
                ${t.mentions?`checked`:``}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-950 dark:focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Comments
                </p>

                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Get notified when someone comments on your work.
                </p>
              </div>

              <input
                type="checkbox"
                name="comments"
                ${t.comments?`checked`:``}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-950 dark:focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Due-date reminders
                </p>

                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Receive reminders about upcoming deadlines.
                </p>
              </div>

              <input
                type="checkbox"
                name="dueDateReminders"
                ${t.dueDateReminders?`checked`:``}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 dark:border-slate-600 dark:bg-slate-950 dark:focus:ring-indigo-500"
              />
            </label>

          </div>
        </div>

        <!-- Save -->
        <div class="flex justify-end border-t border-slate-200 px-6 py-5 dark:border-slate-800">

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Save preferences
          </button>

        </div>

      </form>

    </section>
  `,Tn()}function Tn(){let e=document.querySelector(`#notifications-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=new FormData(e);Cn({taskAssignments:n.get(`taskAssignments`)===`on`,taskUpdates:n.get(`taskUpdates`)===`on`,projectUpdates:n.get(`projectUpdates`)===`on`,mentions:n.get(`mentions`)===`on`,comments:n.get(`comments`)===`on`,dueDateReminders:n.get(`dueDateReminders`)===`on`}),window.dispatchEvent(new CustomEvent(`flowboard:notifications-updated`)),window.dispatchEvent(new CustomEvent(`flowboard:toast`,{detail:{message:`Notification preferences saved.`,type:`success`}}))})}function En(e){let t=o();e.innerHTML=`
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Header -->
      <div class="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 class="text-base font-semibold text-slate-900 dark:text-white">
          Appearance
        </h2>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Customize the look and feel of your workspace.
        </p>
      </div>

      <!-- Theme -->
      <div class="p-6">

        <div>
          <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
            Theme
          </h3>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Choose how Flowboard should appear.
          </p>
        </div>

        <div class="mt-5 grid gap-4 sm:grid-cols-3">

          <!-- Light -->
          <label
            class="cursor-pointer rounded-xl border p-4 transition
              ${t.theme===`light`?`border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-500/10`:`border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600`}"
          >
            <input
              type="radio"
              name="theme"
              value="light"
              ${t.theme===`light`?`checked`:``}
              class="sr-only"
            />

            <div class="flex items-center gap-3">

              <div
                class="flex size-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 text-slate-700 dark:text-slate-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-white">
                  Light
                </p>

                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Always use light mode
                </p>
              </div>

            </div>
          </label>

          <!-- Dark -->
          <label
            class="cursor-pointer rounded-xl border p-4 transition
              ${t.theme===`dark`?`border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-500/10`:`border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600`}"
          >
            <input
              type="radio"
              name="theme"
              value="dark"
              ${t.theme===`dark`?`checked`:``}
              class="sr-only"
            />

            <div class="flex items-center gap-3">

              <div
                class="flex size-10 items-center justify-center rounded-lg bg-slate-900 shadow-sm dark:bg-slate-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.34.27-2.616.752-3.752A9.753 9.753 0 1 0 21.752 15.002Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-white">
                  Dark
                </p>

                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Always use dark mode
                </p>
              </div>

            </div>
          </label>

          <!-- System -->
          <label
            class="cursor-pointer rounded-xl border p-4 transition
              ${t.theme===`system`?`border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-500/10`:`border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600`}"
          >
            <input
              type="radio"
              name="theme"
              value="system"
              ${t.theme===`system`?`checked`:``}
              class="sr-only"
            />

            <div class="flex items-center gap-3">

              <div
                class="flex size-10 items-center justify-center rounded-lg bg-slate-100 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 text-slate-700 dark:text-slate-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 17.25h4.5m-7.5 3h10.5M6 3.75h12A1.5 1.5 0 0 1 19.5 5.25v7.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-7.5A1.5 1.5 0 0 1 6 3.75Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-white">
                  System
                </p>

                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Follow system preference
                </p>
              </div>

            </div>
          </label>

        </div>

      </div>

    </section>
  `,Dn()}function Dn(){document.querySelectorAll(`input[name="theme"]`).forEach(e=>{e.addEventListener(`change`,()=>{let t=e.value;s({theme:t}),c(t),En(document.querySelector(`#settings-content`)),window.dispatchEvent(new CustomEvent(`flowboard:appearance-updated`)),window.dispatchEvent(new CustomEvent(`flowboard:toast`,{detail:{message:`Appearance updated.`,type:`success`}}))})})}function On(){let e=localStorage.getItem(Ln);if(!e)return Rn;try{return{...Rn,...JSON.parse(e)}}catch{return Rn}}function kn(e){return e.trim().split(/\s+/).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}function An(e){localStorage.setItem(Ln,JSON.stringify(e))}function jn(){let e=document.querySelector(`#app`),t=On();e&&(e.innerHTML=`
    <div class="mx-auto max-w-6xl space-y-6">

      <!-- Page Header -->
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Settings
        </h1>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Manage your account and workspace preferences.
        </p>
      </div>

      <!-- Settings Layout -->
      <div class="grid gap-6 lg:grid-cols-[220px_1fr]">

        <!-- Settings Navigation -->
        <aside>
          <nav class="space-y-1" aria-label="Settings navigation">

            <button
              type="button"
              data-settings-tab="profile"
              class="settings-tab flex w-full items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-left text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                />
              </svg>

              Profile
            </button>

            <button
              type="button"
              data-settings-tab="notifications"
              class="settings-tab flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 1-5.714 0m9.55-1.996A5.25 5.25 0 0 0 17.25 11V9a5.25 5.25 0 1 0-10.5 0v2a5.25 5.25 0 0 0-1.443 4.086c.02.3.263.532.563.532h12.866c.3 0 .543-.232.563-.532ZM9.75 20.25h4.5"
                />
              </svg>

              Notifications
            </button>

            <button
              type="button"
              data-settings-tab="appearance"
              class="settings-tab flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591"
                />
              </svg>

              Appearance
            </button>

            <button
              type="button"
              data-settings-tab="workspace"
              class="settings-tab flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75h19.5m-18 0v6.75a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-6.75m-17.25 0V6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75"
                />
              </svg>

              Workspace
            </button>

          </nav>
        </aside>

        <!-- Settings Content -->
        <div id="settings-content">

          <!-- Profile -->
          <section class="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <div class="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
              <h2 class="text-base font-semibold text-slate-900 dark:text-white">
                Profile
              </h2>

              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Update your personal information and account details.
              </p>
            </div>

            <div class="space-y-6 p-6">

              <!-- Avatar -->
              <div class="flex items-center gap-4">

                <div
                  class="flex size-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  ${kn(t.name)}
                </div>

                <div>
                  <button
                    type="button"
                    class="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  >
                    Change avatar
                  </button>

                  <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    JPG, PNG or GIF. Maximum 2MB.
                  </p>
                </div>

              </div>

              <!-- Form -->
              <form id="profile-form" class="space-y-5">

                <div class="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      for="settings-name"
                      class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Full name
                    </label>

                    <input
                      id="settings-name"
                      type="text"
                      value="${t.name}"
                      class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label
                      for="settings-email"
                      class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Email address
                    </label>

                    <input
                      id="settings-email"
                      type="email"
                      value="${t.email}"
                      class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                    />
                  </div>

                </div>

                <div>
                  <label
                    for="settings-role"
                    class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Role
                  </label>

                  <input
                    id="settings-role"
                    type="text"
                    value="${t.role}"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div class="flex justify-end border-t border-slate-200 pt-5 dark:border-slate-800">

                  <button
                    type="submit"
                    class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    Save changes
                  </button>

                </div>

              </form>

            </div>

          </section>

        </div>

      </div>

    </div>
  `,Mn())}function Mn(){let e=document.querySelectorAll(`.settings-tab`),t=document.querySelector(`#settings-content`);e.forEach(n=>{n.addEventListener(`click`,()=>{e.forEach(e=>{e.classList.remove(`bg-indigo-50`,`font-semibold`,`text-indigo-700`),e.classList.add(`font-medium`,`text-slate-600`)}),n.classList.add(`bg-indigo-50`,`font-semibold`,`text-indigo-700`),n.classList.remove(`font-medium`,`text-slate-600`);let r=n.dataset.settingsTab;r===`profile`&&Nn(t),r===`notifications`&&wn(t),r===`appearance`&&En(t),r===`workspace`&&Fn(t,`Workspace`,`Manage your workspace preferences and configuration.`)})}),Pn(),In||=(window.addEventListener(`flowboard:profile-updated`,()=>{if(!document.querySelector(`[data-settings-tab="profile"].bg-indigo-50`))return;let e=document.querySelector(`#settings-content`);e&&Nn(e)}),!0)}function Nn(e){let t=On();e.innerHTML=`
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div class="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 class="text-base font-semibold text-slate-900 dark:text-white">
          Profile
        </h2>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Update your personal information and account details.
        </p>
      </div>

      <div class="p-6">

        <!-- Avatar -->
        <div class="flex items-center gap-4">

          <div
            class="flex size-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            ${kn(t.name)}
          </div>

          <div>
            <button
              type="button"
              class="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Change avatar
            </button>

            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              JPG, PNG or GIF. Maximum 2MB.
            </p>
          </div>

        </div>

        <form id="profile-form" class="space-y-5">

          <div class="grid gap-5 sm:grid-cols-2">

            <div>
              <label
                for="settings-name"
                class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Full name
              </label>

              <input
                id="settings-name"
                type="text"
                value="${t.name}"
                class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                for="settings-email"
                class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Email address
              </label>

              <input
                id="settings-email"
                type="email"
                value="${t.email}"
                class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
              />
            </div>

          </div>

          <div>
            <label
              for="settings-role"
              class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Role
            </label>

            <input
              id="settings-role"
              type="text"
              value="${t.role}"
              class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500/20"
            />
          </div>

          <div class="flex justify-end border-t border-slate-200 pt-5 dark:border-slate-800">

            <button
              type="submit"
              class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Save changes
            </button>

          </div>

        </form>

      </div>

    </section>
  `,Pn()}function Pn(){document.querySelector(`#profile-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=document.querySelector(`#settings-name`)?.value.trim(),n=document.querySelector(`#settings-email`)?.value.trim(),r=document.querySelector(`#settings-role`)?.value.trim();if(!t||!n||!r){window.dispatchEvent(new CustomEvent(`flowboard:toast`,{detail:{message:`Please fill in all profile fields.`,type:`error`}}));return}An({name:t,email:n,role:r}),window.dispatchEvent(new CustomEvent(`flowboard:profile-updated`)),window.dispatchEvent(new CustomEvent(`flowboard:toast`,{detail:{message:`Profile updated successfully.`,type:`success`}}))})}function Fn(e,t,n){e.innerHTML=`
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div class="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 class="text-base font-semibold text-slate-900 dark:text-white">
          ${t}
        </h2>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          ${n}
        </p>
      </div>

      <div class="flex min-h-64 items-center justify-center p-6">

        <div class="text-center">

          <div
            class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-slate-500 dark:text-slate-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <h3 class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
            Coming soon
          </h3>

          <p class="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            This settings section will be implemented in a future step.
          </p>

        </div>

      </div>

    </section>
  `}var In,Ln,Rn,zn,Bn,Vn=t((()=>{d(),In=!1,Ln=`flowboard-profile`,Rn={name:`Abir`,email:`abir@example.com`,role:`Admin`},zn=`flowboard-notifications`,Bn={taskAssignments:!0,taskUpdates:!0,projectUpdates:!0,mentions:!0,comments:!0,dueDateReminders:!0}}));function Hn(e){Kn=e;let t=document.querySelector(`#delete-project-modal`);t&&t.remove(),document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="delete-project-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-project-modal-title"
        >
          <div class="px-5 py-5">
            <div class="flex items-start gap-4">
              <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
                  stroke="currentColor"
                  class="size-5 text-red-600 dark:text-red-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m0 3.75h.007v.007H12v-.007ZM3.75 18.75h16.5L12 3.75 3.75 18.75Z"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <h2
                  id="delete-project-modal-title"
                  class="text-base font-bold text-slate-900 dark:text-white"
                >
                  Delete project?
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Are you sure you want to delete
                  <span
                    id="delete-project-name"
                    class="font-semibold text-slate-700 dark:text-slate-200"
                  ></span>?
                </p>

                <p class="mt-2 text-sm leading-6 text-red-600 dark:text-red-400">
                  This will also permanently delete all tasks belonging to
                  this project. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800">
            <button
              id="cancel-delete-project"
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Cancel
            </button>

            <button
              id="confirm-delete-project"
              type="button"
              class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Delete Project
            </button>
          </div>
        </div>
      </div>
    `),Un()}function Un(){let e=document.querySelector(`#delete-project-modal`),t=document.querySelector(`#cancel-delete-project`),n=document.querySelector(`#confirm-delete-project`);t.addEventListener(`click`,Gn),e.addEventListener(`click`,t=>{t.target===e&&Gn()}),n.addEventListener(`click`,()=>{Y&&=(Kn&&Kn(Y),Gn(),E(`Project deleted successfully.`,`success`),null)})}function Wn(e){let t=document.querySelector(`#delete-project-modal`),n=document.querySelector(`#delete-project-name`);!t||!n||(Y=e,n.textContent=`"${e.name}"`,t.classList.remove(`hidden`),t.classList.add(`flex`))}function Gn(){let e=document.querySelector(`#delete-project-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),Y=null)}var Kn,Y,qn=t((()=>{O(),Kn=null,Y=null}));function Jn(e,t){return e.length===0?`
      <div class="px-5 py-12 text-center">

        <div
          class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-6 text-slate-400 dark:text-slate-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5.25h6m-7.5 3h9m-10.5 3h12m-12 3h7.5"
            />
          </svg>
        </div>

        <h3 class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
          No tasks found
        </h3>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Try changing your search or filters.
        </p>

      </div>
    `:`
    <div class="divide-y divide-slate-100 dark:divide-slate-800">

      ${e.map(e=>{let n=t.find(t=>t.id===e.assigneeId);return`
            <div class="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

              <div class="min-w-0">

                <div class="flex items-center gap-3">

                  <button
                    type="button"
                    class="task-complete-btn flex size-5 shrink-0 items-center justify-center rounded border transition
                      ${e.status===`completed`?`border-indigo-600 bg-indigo-600 text-white`:`border-slate-300 bg-white hover:border-indigo-500 dark:border-slate-600 dark:bg-slate-900`}"
                    data-task-id="${e.id}"
                    aria-label="${e.status===`completed`?`Mark task as incomplete`:`Mark task as complete`}"
                  >
                    ${e.status===`completed`?`
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                            stroke="currentColor"
                            class="size-3.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m5 12 4 4L19 7"
                            />
                          </svg>
                        `:``}
                  </button>

                  <h3
                    class="truncate text-sm font-semibold ${e.status===`completed`?`text-slate-400 line-through`:`text-slate-900 dark:text-white`}"
                  >
                    ${e.title}
                  </h3>

                </div>

                <p
                  class="mt-1 pl-8 text-xs ${e.status===`completed`?`text-slate-400`:`text-slate-500 dark:text-slate-400`}"
                >
                  ${e.description}
                </p>

              </div>

              <div class="flex shrink-0 items-center gap-4 pl-8 sm:pl-0">

                <!-- Edit -->
                <button
                  type="button"
                  class="task-edit-btn rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  data-task-id="${e.id}"
                >
                  Edit
                </button>

                <!-- Delete -->
                <button
                  type="button"
                  class="task-delete-btn rounded-lg px-2.5 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300"
                  data-task-id="${e.id}"
                >
                  Delete
                </button>

                <!-- Status -->
                <select
                  class="task-status-select rounded-full border-0 px-2.5 py-1 text-xs font-semibold outline-none ring-0 transition
                    ${e.status===`completed`?`bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300`:e.status===`in-progress`?`bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`:`bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300`}"
                  data-task-id="${e.id}"
                  aria-label="Change task status"
                >
                  <option
                    value="todo"
                    ${e.status===`todo`?`selected`:``}
                  >
                    To Do
                  </option>

                  <option
                    value="in-progress"
                    ${e.status===`in-progress`?`selected`:``}
                  >
                    In Progress
                  </option>

                  <option
                    value="completed"
                    ${e.status===`completed`?`selected`:``}
                  >
                    Completed
                  </option>
                </select>

                <!-- Priority -->
                <span
                  class="rounded-full px-2.5 py-1 text-xs font-semibold
                    ${e.priority===`high`?`bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300`:e.priority===`medium`?`bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300`:`bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300`}"
                >
                  ${e.priority.charAt(0).toUpperCase()+e.priority.slice(1)}
                </span>

                <!-- Due Date -->
                <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                  ${new Date(e.dueDate).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})}
                </span>

                <!-- Assignee -->
                <div
                  class="flex size-7 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                  title="${n?n.name:`Unassigned`}"
                >
                  ${n?n.initials:`??`}
                </div>

              </div>

            </div>
          `}).join(``)}

    </div>
  `}function X(e){let t=document.querySelector(`#app`),{projects:n,tasks:r,teamMembers:i}=_();if(!t){console.error(`App mount point not found.`);return}let a=n.find(t=>t.id===e),o=r.filter(t=>t.projectId===e),s=o.filter(e=>e.status===`completed`).length,c=o.length,l=c===0?0:Math.round(s/c*100);if(!a){t.innerHTML=`
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div
        class="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >

        <div
          class="mx-auto flex size-12 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-6 text-red-500 dark:text-red-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m0 3h.008v.008H12V15.75ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <h1 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">
          Project not found
        </h1>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          The project you're looking for doesn't exist.
        </p>

        <a
          href="/projects"
          class="mt-5 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Back to Projects
        </a>

      </div>
    </div>
  `;return}let u=(a.memberIds||[]).map(e=>i.find(t=>t.id===e)).filter(Boolean);t.innerHTML=`
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

    <!-- Back -->
    <a
      href="/projects"
      class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        stroke="currentColor"
        class="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      Back to Projects
    </a>


    <!-- Header -->
    <div class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

      <div class="min-w-0">

        <div class="flex flex-wrap items-center gap-3">

          <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            ${a.name}
          </h1>

          <span
            class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            ${a.status===`in-progress`?`In Progress`:a.status}
          </span>

        </div>

        <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          ${a.description}
        </p>

      </div>


      <div class="flex shrink-0 gap-2">

        <button
          id="edit-project-btn"
          type="button"
          class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Edit Project
        </button>

        <button
          id="delete-project-btn"
          type="button"
          class="rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50 hover:text-red-700 dark:border-red-500/30 dark:bg-slate-900 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300"
        >
          Delete Project
        </button>

        <button
          id="add-task-btn"
          type="button"
          class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          Add Task
        </button>

      </div>

    </div>


    <!-- Stats -->
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <!-- Progress -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >

        <div class="flex items-center justify-between">

          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            Progress
          </p>

          <span class="text-sm font-bold text-slate-900 dark:text-white">
            ${l}%
          </span>

        </div>

        <div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

          <div
            class="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style="width: ${l}%"
          ></div>

        </div>

      </div>


      <!-- Tasks -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
          Tasks
        </p>

        <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          ${s}
          <span class="text-base font-medium text-slate-400 dark:text-slate-500">
            / ${c}
          </span>
        </p>
      </div>


      <!-- Members -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
          Members
        </p>

        <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          ${u.length}
        </p>
      </div>


      <!-- Due Date -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
          Due Date
        </p>

        <p class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          ${new Date(a.dueDate).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})}
        </p>
      </div>

    </div>


    <!-- Content -->
    <div
      class="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >

      <div class="border-b border-slate-100 px-5 py-4 dark:border-slate-800">

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 class="text-base font-bold text-slate-900 dark:text-white">
              Project Tasks
            </h2>

            <p
              id="task-count"
              class="mt-1 text-sm text-slate-500 dark:text-slate-400"
            >
              ${o.length}
              ${o.length===1?`task`:`tasks`}
            </p>
          </div>

          <button
            id="add-task-btn-secondary"
            type="button"
            class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
          >
            Add Task
          </button>

        </div>


        <!-- Filters -->
        <div class="mt-4 grid gap-3 md:grid-cols-4">

          <!-- Search -->
          <div class="md:col-span-2">

            <input
              id="task-search"
              type="search"
              placeholder="Search tasks..."
              class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            />

          </div>


          <!-- Status -->
          <select
            id="task-status-filter"
            class="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            <option value="all">All statuses</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>


          <!-- Priority -->
          <select
            id="task-priority-filter"
            class="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            <option value="all">All priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>


          <!-- Sort -->
          <select
            id="task-sort"
            class="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            <option value="due-soon">Due date</option>
            <option value="priority-high">Priority: High → Low</option>
            <option value="priority-low">Priority: Low → High</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title-asc">Title: A → Z</option>
          </select>

        </div>

      </div>


      <div id="task-list">
        ${Jn(o,i)}
      </div>

    </div>

  </div>
`,vt(e=>{r.unshift(e),y({type:`task_created`,user:h().name,target:e.title}),v(),Z(`/projects/${e.projectId}`)}),ft(t=>{let r=n.findIndex(e=>String(e.id)===String(t.id));if(r===-1){E(`Project could not be updated.`,`error`);return}let i=n[r];i.name=t.name,i.description=t.description,i.status=t.status,i.priority=t.priority,i.dueDate=t.dueDate,i.memberIds=t.memberIds,y({type:`project_updated`,user:h().name,target:t.name}),v(),X(e),E(`Project updated successfully.`,`success`)}),Hn(e=>{let t=n.findIndex(t=>t.id===e.id);if(t!==-1){y({type:`project_deleted`,user:h().name,target:e.name}),n.splice(t,1);for(let t=r.length-1;t>=0;t--)r[t].projectId===e.id&&r.splice(t,1);v(),Z(`/projects`)}}),Nt(t=>{let n=r.findIndex(e=>e.id===t.id);n!==-1&&(y({type:`task_deleted`,user:h().name,target:t.title}),r.splice(n,1),v(),X(e))}),Tt(t=>{let n=r.find(e=>e.id===t.id);n&&(n.title=t.title,n.description=t.description,n.status=t.status,n.priority=t.priority,n.dueDate=t.dueDate,n.assigneeId=t.assigneeId,y({type:`task_updated`,user:h().name,target:t.title}),v(),X(e))});let d=document.querySelector(`#add-task-btn`),f=document.querySelector(`#add-task-btn-secondary`),ee=document.querySelector(`#edit-project-btn`);d.addEventListener(`click`,()=>{bt(a.id)}),f.addEventListener(`click`,()=>{bt(a.id)}),ee.addEventListener(`click`,()=>{pt(a)}),document.querySelector(`#delete-project-btn`).addEventListener(`click`,()=>{Wn(a)});let p=document.querySelector(`#task-list`);p.addEventListener(`click`,t=>{let n=t.target.closest(`.task-edit-btn`);if(n){let e=n.dataset.taskId,t=r.find(t=>t.id===e);if(!t)return;Ot(t);return}let i=t.target.closest(`.task-delete-btn`);if(i){let e=i.dataset.taskId,t=r.find(t=>t.id===e);if(!t)return;Ft(t);return}let a=t.target.closest(`.task-complete-btn`);if(!a)return;let o=a.dataset.taskId,s=r.find(e=>e.id===o);s&&(s.status=s.status===`completed`?`todo`:`completed`,s.status===`completed`?y({type:`task_completed`,user:h().name,target:s.title}):y({type:`task_status_changed`,user:h().name,target:s.title}),v(),E(s.status===`completed`?`"${s.title}" completed.`:`"${s.title}" marked as incomplete.`,`success`),X(e))}),p.addEventListener(`change`,t=>{let n=t.target.closest(`.task-status-select`);if(!n)return;let i=n.dataset.taskId,a=r.find(e=>e.id===i);if(!a)return;let o=a.status;a.status=n.value,o!==a.status&&(a.status===`completed`?y({type:`task_completed`,user:h().name,target:a.title}):y({type:`task_status_changed`,user:h().name,target:a.title})),v(),E(`"${a.title}" moved to ${a.status===`todo`?`To Do`:a.status===`in-progress`?`In Progress`:`Completed`}.`,`success`),X(e)});let te=document.querySelector(`#task-search`),m=document.querySelector(`#task-status-filter`),ne=document.querySelector(`#task-priority-filter`),re=document.querySelector(`#task-sort`);function g(){let e=te.value.trim().toLowerCase(),t=m.value,n=ne.value,r=re.value,i=o.filter(r=>{let i=r.title.toLowerCase().includes(e)||r.description.toLowerCase().includes(e),a=t===`all`||r.status===t,o=n===`all`||r.priority===n;return i&&a&&o}),a={high:3,medium:2,low:1};i.sort((e,t)=>{switch(r){case`priority-high`:return a[t.priority]-a[e.priority];case`priority-low`:return a[e.priority]-a[t.priority];case`newest`:return new Date(t.createdAt)-new Date(e.createdAt);case`oldest`:return new Date(e.createdAt)-new Date(t.createdAt);case`title-asc`:return e.title.localeCompare(t.title);default:return new Date(e.dueDate)-new Date(t.dueDate)}}),document.querySelector(`#task-list`).innerHTML=Jn(i),document.querySelector(`#task-count`).textContent=`${i.length} ${i.length===1?`task`:`tasks`}`}te.addEventListener(`input`,g),m.addEventListener(`change`,g),ne.addEventListener(`change`,g),re.addEventListener(`change`,g)}var Yn,Xn,Zn=t((()=>{C(),wt(),Mt(),Rt(),mt(),qn(),Q(),O(),{projects:Yn,tasks:Xn}=_()})),Qn=r({navigateTo:()=>Z,router:()=>$n});function $n(){let e=window.location.pathname;if(e.startsWith(`/projects/`)){let t=e.split(`/`)[2];X(t);return}(er[e]||M)()}function Z(e){window.history.pushState({},``,e),$n()}var er,Q=t((()=>{ct(),_t(),Vt(),Xt(),xn(),Vn(),Zn(),er={"/":M,"/dashboard":M,"/projects":ht,"/tasks":B,"/calendar":U,"/team":J,"/settings":jn}}));function $(e){let t={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};return String(e??``).replace(/[&<>"']/g,e=>t[e])}function tr(e){let{projects:t,tasks:n,teamMembers:r}=_(),i=e.trim().toLowerCase();return i?{projects:t.filter(e=>[e.name,e.description,e.status,e.priority].some(e=>String(e??``).toLowerCase().includes(i))).slice(0,5),tasks:n.filter(e=>{let n=t.find(t=>String(t.id)===String(e.projectId)),a=r.find(t=>String(t.id)===String(e.assigneeId));return[e.title,e.description,e.status,e.priority,n?.name,a?.name].some(e=>String(e??``).toLowerCase().includes(i))}).slice(0,5),teamMembers:r.filter(e=>[e.name,e.email,e.role].some(e=>String(e??``).toLowerCase().includes(i))).slice(0,5)}:{projects:[],tasks:[],teamMembers:[]}}function nr(e){return{project:`
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.8"
        class="size-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"></rect>
        <path d="M9 3v18"></path>
      </svg>
    `,task:`
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.8"
        class="size-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"></rect>
        <path d="m8 12 3 3 5-6"></path>
      </svg>
    `,person:`
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.8"
        class="size-5" aria-hidden="true">
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M4 21a8 8 0 0 1 16 0"></path>
      </svg>
    `}[e]??``}function rr(e){let{type:t,title:n,subtitle:r,path:i,id:a}=e;return`
    <button
      type="button"
      class="global-search-result flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-slate-800 dark:focus:bg-slate-800"
      data-result-type="${$(t)}"
      data-result-id="${$(a)}"
      data-result-path="${$(i)}"
      role="option"
    >
      <span
        class="flex size-10 shrink-0 items-center justify-center rounded-lg
          ${t===`project`?`bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300`:t===`task`?`bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300`:`bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300`}"
      >
        ${nr(t===`person`?`person`:t)}
      </span>

      <span class="min-w-0 flex-1">
        <span class="block truncate text-sm font-semibold text-slate-900 dark:text-white">
          ${$(n)}
        </span>

        <span class="mt-0.5 block truncate text-xs text-slate-500 dark:text-slate-400">
          ${$(r)}
        </span>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-4 shrink-0 text-slate-400"
        aria-hidden="true"
      >
        <path d="M7 17 17 7"></path>
        <path d="M7 7h10v10"></path>
      </svg>
    </button>
  `}function ir(e,t){return t.length?`
    <section class="px-2 py-2">
      <h3 class="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        ${$(e)}
      </h3>

      <div class="space-y-1">
        ${t.map(rr).join(``)}
      </div>
    </section>
  `:``}function ar(e){let t=document.querySelector(`#global-search-results`);if(!t)return;let n=e.trim();if(!n){t.innerHTML=`
      <div class="px-6 py-12 text-center">
        <div class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          ${nr(`project`)}
        </div>

        <p class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
          Search Flowboard
        </p>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Find projects, tasks, and team members.
        </p>
      </div>
    `;return}let r=tr(n);if(r.projects.length+r.tasks.length+r.teamMembers.length===0){t.innerHTML=`
      <div class="px-6 py-12 text-center">
        <p class="text-sm font-semibold text-slate-900 dark:text-white">
          No results found
        </p>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Try a different search term.
        </p>
      </div>
    `;return}let i=r.projects.map(e=>({type:`project`,id:e.id,title:e.name,subtitle:e.description||`Project`,path:`/projects/${e.id}`})),a=r.tasks.map(e=>{let t=_().projects.find(t=>String(t.id)===String(e.projectId));return{type:`task`,id:e.id,title:e.title,subtitle:t?`Task · ${t.name}`:`Task`,path:`/tasks`}}),o=r.teamMembers.map(e=>({type:`person`,id:e.id,title:e.name,subtitle:`${e.role} · ${e.email}`,path:`/team`}));t.innerHTML=`
    ${ir(`Projects`,i)}
    ${ir(`Tasks`,a)}
    ${ir(`People`,o)}
  `}function or(){let e=document.querySelector(`#global-search-modal`),t=document.querySelector(`#global-search-button`),n=document.querySelector(`#global-search-input`);e&&(e.classList.add(`hidden`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`overflow-hidden`),t&&(t.setAttribute(`aria-expanded`,`false`),t.focus()),n&&(n.value=``))}function sr(){let e=document.querySelector(`#global-search-modal`),t=document.querySelector(`#global-search-input`),n=document.querySelector(`#global-search-results`),r=document.querySelector(`#global-search-button`);!e||!t||(e.classList.remove(`hidden`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`overflow-hidden`),r?.setAttribute(`aria-expanded`,`true`),ar(``),requestAnimationFrame(()=>{t.focus()}),n&&(n.scrollTop=0))}function cr(){ur||(ur=!0,document.addEventListener(`click`,e=>{if(e.target.closest(`#global-search-button`)){sr();return}if(e.target.closest(`[data-close-global-search]`)){or();return}let t=e.target.closest(`.global-search-result`);if(t){let e=t.dataset.resultPath;or(),e&&Z(e);return}}),document.addEventListener(`input`,e=>{e.target.id===`global-search-input`&&ar(e.target.value)}),document.addEventListener(`keydown`,e=>{if((navigator.platform.toUpperCase().includes(`MAC`)?e.metaKey:e.ctrlKey)&&e.key.toLowerCase()===`k`){e.preventDefault(),sr();return}if(e.key===`Escape`){let e=document.querySelector(`#global-search-modal`);e&&!e.classList.contains(`hidden`)&&or()}}))}function lr(){if(document.querySelector(`#global-search-modal`)){cr();return}document.body.insertAdjacentHTML(`beforeend`,`
      <div
        id="global-search-modal"
        class="fixed inset-0 z-[100] hidden overflow-y-auto bg-slate-950/50 px-4 py-10 backdrop-blur-sm sm:py-20"
        aria-hidden="true"
      >
        <div
          class="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="global-search-title"
        >
          <div class="flex items-center gap-3 border-b border-slate-200 px-4 dark:border-slate-700 sm:px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 shrink-0 text-slate-400"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>

            <label for="global-search-input" class="sr-only">
              Search Flowboard
            </label>

            <input
              id="global-search-input"
              type="search"
              autocomplete="off"
              placeholder="Search projects, tasks, people..."
              class="h-16 min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0 dark:text-white"
            />

            <button
              type="button"
              data-close-global-search
              class="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Close search"
            >
              ESC
            </button>
          </div>

          <div class="border-b border-slate-200 px-5 py-3 dark:border-slate-700">
            <h2
              id="global-search-title"
              class="text-xs font-semibold text-slate-500 dark:text-slate-400"
            >
              Search across your workspace
            </h2>
          </div>

          <div
            id="global-search-results"
            class="max-h-[min(60vh,32rem)] overflow-y-auto p-2"
            role="listbox"
            aria-label="Search results"
          ></div>

          <div class="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-950">
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Search projects, tasks, and people
            </p>

            <button
              type="button"
              data-close-global-search
              class="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Close search
            </button>
          </div>
        </div>
      </div>
    `),cr()}var ur,dr=t((()=>{C(),Q(),ur=!1}));function fr(){let e=localStorage.getItem(vr);if(!e)return yr;try{return{...yr,...JSON.parse(e)}}catch{return yr}}function pr(e){return e.trim().split(/\s+/).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}function mr(){let e=fr(),t=pr(e.name),n=document.querySelector(`#navbar`);if(!n){console.error(`Navbar mount point not found.`);return}n.innerHTML=`
    <header class="h-16 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div class="h-full px-4 sm:px-6 flex items-center justify-between">

        <!-- Left Side -->
        <div class="flex items-center gap-2">

          <!-- Mobile Menu Button -->
          <button
            type="button"
            id="mobile-menu-button"
            class="inline-flex size-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
              aria-hidden="true"
            >
              <path d="M4 6h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
            </svg>
          </button>

          <!-- Logo -->
          <a
            href="/"
            class="flex items-center gap-2"
            aria-label="Flowboard home"
          >
            <div
              class="size-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold"
            >
              F
            </div>

            <span class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Flowboard
            </span>
          </a>

        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-2">

          <!-- Search -->
          <button
            type="button"
            id="global-search-button"
            class="size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Search Flowboard"
              aria-expanded="false"
  aria-controls="global-search-modal"
  title="Search (Ctrl+K)"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
          </button>

          <!-- Theme Toggle -->
          <button
            type="button"
            id="theme-toggle-btn"
            class="size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Switch to dark mode"
            title="Switch to dark mode"
          >
            <!-- Moon Icon: Light Mode -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 dark:hidden"
              aria-hidden="true"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397Z"></path>
            </svg>

            <!-- Sun Icon: Dark Mode -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="hidden size-5 dark:block"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </button>

          <!-- Notifications -->
          <!-- Notifications -->
<div class="relative">

  <button
    type="button"
    id="notifications-button"
    class="relative size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    aria-label="Notifications"
    aria-expanded="false"
    aria-controls="notifications-panel"
  >
    <!-- Bell Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-5"
      aria-hidden="true"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
      <path d="M10 21h4"></path>
    </svg>

    <!-- Unread Notification Badge -->
    <span
      id="notifications-badge"
      class="absolute -right-0.5 -top-0.5 flex min-w-4 h-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white"
      aria-hidden="true"
    >
      2
    </span>
  </button>

  <!-- Notifications Dropdown -->
  <div
    id="notifications-panel"
    class="absolute right-0 top-full z-50 mt-2 hidden w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
    role="region"
    aria-label="Notifications"
  >
    <div id="notifications-container"></div>
  </div>

</div>

          <!-- User Menu -->
          <div class="relative">

            <!-- User Menu Button -->
            <button
              type="button"
              id="user-menu-button"
              class="ml-1 flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100 transition-colors dark:hover:bg-slate-800"
              aria-label="Open user menu"
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls="user-menu"
            >
              <div
                class="size-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold dark:bg-indigo-500/20 dark:text-indigo-300"
              >
                ${t}
              </div>

              <span class="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-200">
                ${e.name}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="hidden sm:block size-4 text-slate-400 transition-transform duration-200 dark:text-slate-500"
                id="user-menu-chevron"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            <!-- Dropdown -->
            <div
              id="user-menu"
              class="absolute right-0 top-full z-50 mt-2 hidden w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900"
              role="menu"
            >

              <!-- User Information -->
              <div class="border-b border-slate-200 px-4 py-3 dark:border-slate-700">

                <p class="text-sm font-semibold text-slate-900 dark:text-white">
                  ${e.name}
                </p>

                <p class="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                  ${e.email}
                </p>

              </div>

              <!-- Menu Items -->
              <div class="p-1.5">

                <!-- Profile -->
                <a
                  href="#"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 21a8 8 0 0 1 16 0"></path>
                  </svg>

                  Profile
                </a>

                <!-- Settings -->
                <a
                  href="#"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06A1.7 1.7 0 0 0 16.16 19a1.7 1.7 0 0 0-1.06 1.55V21h-2.4v-.45A1.7 1.7 0 0 0 11.64 19a1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.06H6v-2.4h.45A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.64 6 1.7 1.7 0 0 0 12.7 4.45V4h2.4v.45A1.7 1.7 0 0 0 16.16 6a1.7 1.7 0 0 0 1.88-.34l-.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1.06H21v2.4h-.45A1.7 1.7 0 0 0 19.4 15Z"></path>
                  </svg>

                  Settings
                </a>

              </div>

              <!-- Logout -->
              <div class="border-t border-slate-200 p-1.5 dark:border-slate-700">

                <button
                  type="button"
                  id="logout-button"
                  class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5"
                    aria-hidden="true"
                  >
                    <path d="M10 17l5-5-5-5"></path>
                    <path d="M15 12H3"></path>
                    <path d="M21 19V5a2 2 0 0 0-2-2h-6"></path>
                  </svg>

                  Log out
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </header>
  `,hr(),gr(),Se(),lr(),_r||=(window.addEventListener(`flowboard:profile-updated`,()=>{mr()}),!0)}function hr(){let e=document.querySelector(`#user-menu-button`),t=document.querySelector(`#user-menu`),n=document.querySelector(`#user-menu-chevron`);if(!e||!t||!n){console.error(`User menu elements not found.`);return}function r(){t.classList.remove(`hidden`),e.setAttribute(`aria-expanded`,`true`),n.classList.add(`rotate-180`)}function i(){t.classList.add(`hidden`),e.setAttribute(`aria-expanded`,`false`),n.classList.remove(`rotate-180`)}function a(){e.getAttribute(`aria-expanded`)===`true`?i():r()}e.addEventListener(`click`,e=>{e.stopPropagation(),a()}),document.addEventListener(`click`,n=>{!t.contains(n.target)&&!e.contains(n.target)&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&(i(),e.focus())})}function gr(){let e=document.querySelector(`#theme-toggle-btn`);if(!e){console.error(`Theme toggle button not found.`);return}function t(){let t=document.documentElement.classList.contains(`dark`)?`Switch to light mode`:`Switch to dark mode`;e.setAttribute(`aria-label`,t),e.setAttribute(`title`,t)}t(),e.addEventListener(`click`,()=>{let e=o(),n=document.documentElement.classList.contains(`dark`)?`light`:`dark`;s({...e,theme:n}),c(n),t()})}var _r,vr,yr,br=t((()=>{d(),De(),dr(),_r=!1,vr=`flowboard-profile`,yr={name:`Abir`,email:`abir@example.com`,role:`Admin`}})),xr,Sr,Cr=t((()=>{xr=[{label:`Dashboard`,href:`/`,icon:`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
            >
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
            </svg>
        `},{label:`Projects`,href:`/projects`,icon:`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
            >
                <path d="M3 7h5l2 2h11v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2"></path>
            </svg>
        `},{label:`My Tasks`,href:`/tasks`,icon:`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
            >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        `},{label:`Calendar`,href:`/calendar`,icon:`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
            >
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M16 2v4"></path>
                <path d="M8 2v4"></path>
                <path d="M3 10h18"></path>
            </svg>
        `},{label:`Team`,href:`/team`,icon:`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        `}],Sr=[{label:`Settings`,href:`/settings`,icon:`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
            >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06A1.7 1.7 0 0 0 16.16 19a1.7 1.7 0 0 0-1.06 1.55V21h-2.4v-.45A1.7 1.7 0 0 0 11.64 19a1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.06H6v-2.4h.45A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.64 6 1.7 1.7 0 0 0 12.7 4.45V4h2.4v.45A1.7 1.7 0 0 0 16.16 6a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1.06H21v2.4h-.45A1.7 1.7 0 0 0 19.4 15Z"></path>
            </svg>
        `}]}));function wr(){let e=document.querySelector(`#sidebar`);if(!e){console.error(`Sidebar mount point not found.`);return}let t=window.location.pathname;e.innerHTML=`
    <aside class="hidden w-64 shrink-0 border-r border-slate-200 bg-white md:flex dark:border-slate-800 dark:bg-slate-950">
      <div class="flex w-full flex-col">

        <!-- Navigation -->
        <nav class="flex-1 p-4">

          <div class="space-y-1">
            ${xr.map(e=>{let n=e.href===t||e.href===`/`&&t===`/dashboard`;return`
                  <a
                    href="${e.href}"
                    class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${n?`bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`:`font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100`} transition-colors"
                  >
                    ${e.icon}

                    ${e.label}
                  </a>
                `}).join(``)}
          </div>

          <div class="mt-8">

        <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Workspace
            </p>

            <div class="mt-2 space-y-1">
              ${Sr.map(e=>{let n=e.href===t;return`
                    <a
                      href="${e.href}"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${n?`bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`:`font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100`} transition-colors"
                    >
                      ${e.icon}

                      ${e.label}
                    </a>
                  `}).join(``)}
            </div>

          </div>

        </nav>

        <!-- Sidebar Footer -->
      <div class="border-t border-slate-200 p-4 dark:border-slate-800">

       <div class="rounded-lg bg-slate-50 p-3 dark:bg-slate-900">

         <p class="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Free Plan
            </p>

        <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              3 of 5 projects used
            </p>

         <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div class="h-full w-3/5 rounded-full bg-indigo-600"></div>
            </div>

            <button
              type="button"
          class="mt-3 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Upgrade plan
            </button>

          </div>

        </div>

      </div>
    </aside>
  `}var Tr=t((()=>{Cr()}));function Er(){let e=document.querySelector(`#footer`);if(!e){console.error(`Footer mount point not found.`);return}e.innerHTML=`
    <footer class="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div class="px-6 py-5">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <!-- Copyright -->
          <p class="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Flowboard. All rights reserved. Made By
            <span class="animate-abir">Abir Bro</span>.
          </p>

          <!-- Footer Links -->
          <nav class="flex items-center gap-5" aria-label="Footer navigation">

            <button
              type="button"
              data-footer-modal="help"
              class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Help
            </button>

            <button
              type="button"
              data-footer-modal="privacy"
              class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Privacy
            </button>

            <button
              type="button"
              data-footer-modal="terms"
              class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Terms
            </button>

          </nav>
        </div>
      </div>
    </footer>

    <!-- Footer Modals -->
    <div
      id="footer-modal-overlay"
      class="fixed inset-0 z-[100] hidden items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
      aria-hidden="true"
    >
      <section
        id="footer-modal"
        class="my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="footer-modal-title"
        aria-describedby="footer-modal-description"
      >

        <!-- Modal Header -->
        <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">

          <h2
            id="footer-modal-title"
            class="text-lg font-bold text-slate-900 dark:text-white"
          >
            Help
          </h2>

          <button
            type="button"
            id="footer-modal-close"
            class="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
              aria-hidden="true"
            >
              <path d="m18 6-12 12"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

        </div>

        <!-- Modal Content -->
        <div
          id="footer-modal-description"
          class="max-h-[65vh] overflow-y-auto px-6 py-6"
        ></div>

        <!-- Modal Footer -->
        <div class="flex justify-end border-t border-slate-200 px-6 py-4 dark:border-slate-700">

          <button
            type="button"
            id="footer-modal-done"
            class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Done
          </button>

        </div>

      </section>
    </div>
  `,Dr()}function Dr(){if(Or)return;Or=!0;let e=document.querySelector(`#footer-modal-overlay`),t=document.querySelector(`#footer-modal-title`),n=document.querySelector(`#footer-modal-description`),r=document.querySelector(`#footer-modal-close`),i=document.querySelector(`#footer-modal-done`);if(!e||!t||!n||!r||!i){console.error(`Footer modal elements not found.`);return}let a=null,o={help:{title:`Help & Contact`,content:`
        <div class="space-y-5">

          <div>
            <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Need help with Flowboard or have a suggestion? Feel free to reach out through any of the following channels.
            </p>
          </div>

          <!-- GitHub -->
          <a
            href="https://github.com/itsqyp"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.13c-3.1.67-3.76-1.31-3.76-1.31-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.09 3.2 1.6.1-.73.39-1.23.7-1.51-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.25-5.09 5.53.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                GitHub
              </p>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                github.com/itsqyp
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

          <!-- Facebook -->
          <a
            href="https://www.facebook.com/alan.abir.7/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                aria-hidden="true"
              >
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.4c0-3.03 1.79-4.71 4.54-4.71 1.31 0 2.69.24 2.69.24v2.98H15.85c-1.49 0-1.96.93-1.96 1.88v2.28h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z"/>
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Facebook
              </p>
              <p class="mt-1 break-all text-sm text-slate-500 dark:text-slate-400">
                facebook.com/alan.abir.7
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

          <!-- Email -->
          <a
            href="mailto:abirebnaanowar@gmail.com"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                class="size-6"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Email
              </p>
              <p class="mt-1 break-all text-sm text-slate-500 dark:text-slate-400">
                abirebnaanowar@gmail.com
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

        </div>
      `},privacy:{title:`Privacy Policy`,content:`
        <div class="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              1. Information and Storage
            </h3>
            <p class="mt-1">
              Flowboard stores application data, including projects, tasks, team members, and preferences, in your browser's local storage.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              2. Local Data
            </h3>
            <p class="mt-1">
              This frontend demonstration does not require a Flowboard account or send your workspace data to a Flowboard backend. Data saved in your browser may be lost if you clear your site data or use a different browser or device.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              3. External Links
            </h3>
            <p class="mt-1">
              The Help section links to third-party services such as GitHub, Facebook, and your email application. Those services have their own privacy policies and practices.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              4. Contact
            </h3>
            <p class="mt-1">
              If you have questions about this notice, contact the developer at
              <a
                href="mailto:abirebnaanowar@gmail.com"
                class="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >abirebnaanowar@gmail.com</a>.
            </p>
          </div>

          <p class="rounded-lg bg-slate-100 p-3 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            This is a basic privacy notice for a frontend project, not legal advice. Update it if you introduce a backend, analytics, or third-party data collection.
          </p>

        </div>
      `},terms:{title:`Terms of Use`,content:`
        <div class="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              1. Using Flowboard
            </h3>
            <p class="mt-1">
              Flowboard is a project management interface intended to help organize projects, tasks, and team information.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              2. Your Data
            </h3>
            <p class="mt-1">
              You are responsible for the information you enter. Because this frontend stores data in your browser, you should not rely on it as the only copy of important information.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              3. Appropriate Use
            </h3>
            <p class="mt-1">
              Use the application lawfully and do not attempt to disrupt its operation, compromise its security, or misuse information belonging to others.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              4. Availability
            </h3>
            <p class="mt-1">
              This project is provided as-is, without a guarantee that every feature will always be available or that stored data will never be lost.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              5. Changes
            </h3>
            <p class="mt-1">
              These terms may be updated as the project evolves. Continued use of the application after changes means you accept the updated terms.
            </p>
          </div>

          <p class="rounded-lg bg-slate-100 p-3 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            These are simple demonstration terms, not a substitute for legally reviewed terms for a commercial service.
          </p>

        </div>
      `}};function s(i,s){let c=o[i];c&&(a=s,t.textContent=c.title,n.innerHTML=c.content,e.classList.remove(`hidden`),e.classList.add(`flex`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`overflow-hidden`),r.focus())}function c(){e.classList.add(`hidden`),e.classList.remove(`flex`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`overflow-hidden`),a?.isConnected&&a.focus()}document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-footer-modal]`);if(n){s(n.dataset.footerModal,n);return}if(t.target.closest(`#footer-modal-close`)||t.target.closest(`#footer-modal-done`)){c();return}t.target===e&&c()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&!e.classList.contains(`hidden`)&&c()})}var Or,kr=t((()=>{Or=!1}));function Ar(){let e=document.querySelector(`#mobile-navigation`);if(!e){console.error(`Mobile navigation mount point not found.`);return}e.innerHTML=`
        <!-- Backdrop -->
        <div
            id="mobile-navigation-backdrop"
            class="fixed inset-0 z-40 hidden bg-black/40"
        ></div>

        <!-- Drawer -->
        <aside
            id="mobile-navigation-drawer"
          class="fixed inset-y-0 left-0 z-50 flex w-72 -translate-x-full flex-col bg-white shadow-xl transition-transform duration-300 dark:bg-slate-950"
        >

            <!-- Drawer Header -->
       <div class="flex h-16 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-800">

                <div class="flex items-center gap-2">

                    <div
                        class="flex size-9 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white"
                    >
                        F
                    </div>

                <span class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        Flowboard
                    </span>

                </div>

                <button
                    type="button"
                    id="mobile-menu-close"
                  class="flex size-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    aria-label="Close navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-5"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>

            </div>

            <!-- Navigation -->
            <nav class="flex-1 overflow-y-auto p-4">

    <div class="space-y-1">

        ${xr.map((e,t)=>`
            <a
                href="${e.href}"
                class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${t===0?`bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300`:`font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100`}"
            >
                ${e.icon}

                ${e.label}
            </a>
        `).join(``)}

    </div>

    <div class="mt-8">

    <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Workspace
        </p>

        <div class="mt-2 space-y-1">

            ${Sr.map(e=>`
                <a
                    href="${e.href}"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                    ${e.icon}

                    ${e.label}
                </a>
            `).join(``)}

        </div>

    </div>

</nav>
        </aside>
    `,jr()}function jr(){let e=document.querySelector(`#mobile-menu-button`),t=document.querySelector(`#mobile-menu-close`),n=document.querySelector(`#mobile-navigation-backdrop`),r=document.querySelector(`#mobile-navigation-drawer`);if(!e||!t||!n||!r){console.error(`Mobile navigation elements not found.`);return}function i(){r.classList.remove(`-translate-x-full`),n.classList.remove(`hidden`),e.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`overflow-hidden`)}function a(){r.classList.add(`-translate-x-full`),n.classList.add(`hidden`),e.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`overflow-hidden`)}e.addEventListener(`click`,i),t.addEventListener(`click`,a),n.addEventListener(`click`,a),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()})}var Mr=t((()=>{Cr()}));function Nr(){document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);!n||!n.startsWith(`/`)||n.startsWith(`//`)||(e.preventDefault(),Z(n),wr())}),window.addEventListener(`popstate`,()=>{$n(),wr()})}var Pr=t((()=>{Q(),Tr()}));n((()=>{i(),a(),br(),Tr(),kr(),Mr(),O(),Q(),ct(),Pr(),d(),c(o().theme),mr(),wr(),Er(),Ar(),Oe(),Nr(),ot(),$n()}))();