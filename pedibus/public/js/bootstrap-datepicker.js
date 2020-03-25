





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-5Bs4ERl99/u2AUfpOZF2F0cdfNby7+Vd9teUshXUBPo5CjwECR7IAEf+weI/eCk5tF7K1h3O8hd8k0+P/HePeg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-e41b3811197df7fbb60147e939917617.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-21eX2YaEYIYa91WFh0mXaxJ3wLQxy2ldlpRbyuCueK3MvqHGEzmXYPkMQ4XBtASauZXKlL1hPxQQU9g28R03wQ==" rel="stylesheet" href="https://github.githubassets.com/assets/site-db5797d9868460861af755858749976b.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-vna9AxrJa9t+A93H0lxAPca1mXWQB5A/jIBppkp+Ys/EV2l+rsMcCyU/Fj4BpmEZ3nY4hHwJ/FqUEeMFXiYl0w==" rel="stylesheet" href="https://github.githubassets.com/assets/github-be76bd031ac96bdb7e03ddc7d25c403d.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>bootstrap-datepicker/bootstrap-datepicker.js at master · uxsolutions/bootstrap-datepicker · GitHub</title>
    <meta name="description" content="A datepicker for twitter bootstrap (@twbs). Contribute to uxsolutions/bootstrap-datepicker development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/16959059?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="uxsolutions/bootstrap-datepicker" /><meta name="twitter:description" content="A datepicker for twitter bootstrap (@twbs). Contribute to uxsolutions/bootstrap-datepicker development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/16959059?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="uxsolutions/bootstrap-datepicker" /><meta property="og:url" content="https://github.com/uxsolutions/bootstrap-datepicker" /><meta property="og:description" content="A datepicker for twitter bootstrap (@twbs). Contribute to uxsolutions/bootstrap-datepicker development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  
  

  <meta name="request-id" content="F013:2B5F0:199C6E8:24AAE24:5E738A68" data-pjax-transient="true"/><meta name="html-safe-nonce" content="d0e0d0001b35108e62ade644ab983681efc83a95" data-pjax-transient="true"/><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS91eHNvbHV0aW9ucy9ib290c3RyYXAtZGF0ZXBpY2tlci90cmVlL21hc3Rlci9qcyIsInJlcXVlc3RfaWQiOiJGMDEzOjJCNUYwOjE5OUM2RTg6MjRBQUUyNDo1RTczOEE2OCIsInZpc2l0b3JfaWQiOiI3NjIyNjgyNTg5NTI4NDkxNTUiLCJyZWdpb25fZWRnZSI6ImFtcyIsInJlZ2lvbl9yZW5kZXIiOiJhbXMifQ==" data-pjax-transient="true"/><meta name="visitor-hmac" content="b5fb09995a2dbcb91d2d86433c760f59836b3482c8b7c6cb6030dfb274dd5bfc" data-pjax-transient="true"/>



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">


    <meta name="enabled-features" content="MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,RELATED_ISSUES">

  <meta http-equiv="x-pjax-version" content="312c483b5bc825df4ac2894bdf1cdf26">
  

      <link href="https://github.com/uxsolutions/bootstrap-datepicker/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-datepicker:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/uxsolutions/bootstrap-datepicker git https://github.com/uxsolutions/bootstrap-datepicker.git">

  <meta name="octolytics-dimension-user_id" content="16959059" /><meta name="octolytics-dimension-user_login" content="uxsolutions" /><meta name="octolytics-dimension-repository_id" content="3744545" /><meta name="octolytics-dimension-repository_nwo" content="uxsolutions/bootstrap-datepicker" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="3744545" /><meta name="octolytics-dimension-repository_network_root_nwo" content="uxsolutions/bootstrap-datepicker" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    



        <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-lg d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/uxsolutions">uxsolutions</a>
    /
    <a class="Header-link" href="/uxsolutions/bootstrap-datepicker">bootstrap-datepicker</a>


          </div>

        <div class="d-flex flex-items-center">
            <a href="/join?source=header-repo"
              class="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="77ef824b40671ddd374af64d321760bc123fea42fa04ee4e917d8a301c230b3e"
              data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
              Sign&nbsp;up
            </a>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a></li>
                          <li class="edge-item-fix"><a href="/features/packages" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Packages">Packages</a></li>
                      <li class="edge-item-fix"><a href="/features/security" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Security">Security</a></li>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex mb-3 mb-lg-0">
            <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="3744545" data-scoped-search-url="/uxsolutions/bootstrap-datepicker/search" data-unscoped-search-url="/search" action="/uxsolutions/bootstrap-datepicker/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="JZ3Wq+s2jIFXXpU1zgOCOXIlH7SmfVjDGzkMDher+kIh0+sWhAWVzZ9RP3dXFaK8FVwaOfCqMA9fV2QKliUAvQ==" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="/login?return_to=%2Fuxsolutions%2Fbootstrap-datepicker%2Fblob%2Fmaster%2Fjs%2Fbootstrap-datepicker.js"
          class="HeaderMenu-link no-underline mr-3"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="21f98367f6dc3c3cfb72a2aa36f2f9532224186ea35dc3a9227489957c733d99"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="/join?source=header-repo&amp;source_repo=uxsolutions%2Fbootstrap-datepicker"
            class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="21f98367f6dc3c3cfb72a2aa36f2f9532224186ea35dc3a9227489957c733d99"
            data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  




  









  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3">

    <div class="d-flex container-lg mb-4 p-responsive d-none d-lg-flex">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author ml-1 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/uxsolutions/hovercard" href="/uxsolutions">uxsolutions</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/uxsolutions/bootstrap-datepicker">bootstrap-datepicker</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 " >




  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9f4df5b313594e908adec454babdb5074332d5c136c358f32a0a6ef89c51ab7b" href="/login?return_to=%2Fuxsolutions%2Fbootstrap-datepicker">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a class="social-count" href="/uxsolutions/bootstrap-datepicker/watchers"
       aria-label="477 users are watching this repository">
      477
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:3744545,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6e6e9a23368f642a67f74445a2d746824908073feb944711b33b72cabb3b4f98" href="/login?return_to=%2Fuxsolutions%2Fbootstrap-datepicker">
      <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

      Star
</a>
    <a class="social-count js-social-count" href="/uxsolutions/bootstrap-datepicker/stargazers"
      aria-label="12004 users starred this repository">
      12k
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:3744545,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e06f05f391a1f8f5b314c7f66fa3081913b9f8fb1650368395e006322a7d754b" href="/login?return_to=%2Fuxsolutions%2Fbootstrap-datepicker">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="/uxsolutions/bootstrap-datepicker/network/members" class="social-count"
       aria-label="5771 users forked this repository">
      5.8k
    </a>
  </li>
</ul>

    </div>
      
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /uxsolutions/bootstrap-datepicker" href="/uxsolutions/bootstrap-datepicker">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /uxsolutions/bootstrap-datepicker/issues" href="/uxsolutions/bootstrap-datepicker/issues">
        <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg></div>
        <span itemprop="name">Issues</span>
        <span class="Counter">706</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /uxsolutions/bootstrap-datepicker/pulls" href="/uxsolutions/bootstrap-datepicker/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">90</span>
      <meta itemprop="position" content="4">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /uxsolutions/bootstrap-datepicker/actions" href="/uxsolutions/bootstrap-datepicker/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /uxsolutions/bootstrap-datepicker/projects" href="/uxsolutions/bootstrap-datepicker/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg></div>
      Projects
      <span class="Counter">1</span>
</a>

    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /uxsolutions/bootstrap-datepicker/security/advisories" href="/uxsolutions/bootstrap-datepicker/security/advisories">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg></div>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /uxsolutions/bootstrap-datepicker/pulse" href="/uxsolutions/bootstrap-datepicker/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg></div>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /uxsolutions/bootstrap-datepicker" href="/uxsolutions/bootstrap-datepicker">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /uxsolutions/bootstrap-datepicker/issues" href="/uxsolutions/bootstrap-datepicker/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">706</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /uxsolutions/bootstrap-datepicker/pulls" href="/uxsolutions/bootstrap-datepicker/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">90</span>
        <meta itemprop="position" content="4">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /uxsolutions/bootstrap-datepicker/projects" href="/uxsolutions/bootstrap-datepicker/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">1</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /uxsolutions/bootstrap-datepicker/actions" href="/uxsolutions/bootstrap-datepicker/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /uxsolutions/bootstrap-datepicker/security/advisories" href="/uxsolutions/bootstrap-datepicker/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="8">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /uxsolutions/bootstrap-datepicker/pulse" href="/uxsolutions/bootstrap-datepicker/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>

  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>


<div class="container-lg clearfix new-discussion-timeline  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/uxsolutions/bootstrap-datepicker/blob/491ece3ea1d3e3e06b0e6e62b0aeec5d9278a6c6/js/bootstrap-datepicker.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:a18b72f49fd6c6c74feae23e901e7366 -->
      <div class="signup-prompt-bg rounded-1 js-signup-prompt" data-prompt="signup" hidden>
    <div class="signup-prompt p-4 text-center mb-4 rounded-1">
      <div class="position-relative">
        <button type="button" class="position-absolute top-0 right-0 btn-link link-gray js-signup-prompt-button" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
          Dismiss
        </button>
        <h3 class="pt-2">Join GitHub today</h3>
        <p class="col-6 mx-auto">GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.</p>
        <a class="btn btn-primary" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/uxsolutions/bootstrap-datepicker/blob/master/js/bootstrap-datepicker.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fe96a01ff0a2835c9b3bac89dcec4aa9155016f44d32c0ba841d3ccf737ebafb" href="/join?source=prompt-blob-show&amp;source_repo=uxsolutions%2Fbootstrap-datepicker">Sign up</a>
      </div>
    </div>
  </div>


    <div class="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn btn-sm css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/uxsolutions/bootstrap-datepicker/refs/master/js/bootstrap-datepicker.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/uxsolutions/bootstrap-datepicker/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="js/bootstrap-datepicker.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/uxsolutions/bootstrap-datepicker"><span>bootstrap-datepicker</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/uxsolutions/bootstrap-datepicker/tree/master/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">bootstrap-datepicker.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/uxsolutions/bootstrap-datepicker/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="js/bootstrap-datepicker.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>

    



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/lukeburden/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/lukeburden"><img class="avatar" src="https://avatars3.githubusercontent.com/u/1703533?s=40&amp;v=4" width="20" height="20" alt="@lukeburden" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="contributor" data-hovercard-type="user" data-hovercard-url="/users/lukeburden/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/lukeburden">lukeburden</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="Add setting to allow explicit setting of isInline (#2247)" class="link-gray" href="/uxsolutions/bootstrap-datepicker/commit/8e7d81baeba238b6ae6c2319b435b87daef1fbaf">Add setting to allow explicit setting of isInline (</a><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="250791769" data-permission-text="Title is private" data-url="https://github.com/uxsolutions/bootstrap-datepicker/issues/2247" data-hovercard-type="pull_request" data-hovercard-url="/uxsolutions/bootstrap-datepicker/pull/2247/hovercard" href="https://github.com/uxsolutions/bootstrap-datepicker/pull/2247">#2247</a><a data-pjax="true" title="Add setting to allow explicit setting of isInline (#2247)" class="link-gray" href="/uxsolutions/bootstrap-datepicker/commit/8e7d81baeba238b6ae6c2319b435b87daef1fbaf">)</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/uxsolutions/bootstrap-datepicker/commit/8e7d81baeba238b6ae6c2319b435b87daef1fbaf" data-pjax>8e7d81b</a>
          <relative-time datetime="2019-07-27T15:07:04Z" class="no-wrap">Jul 27, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>162</strong> contributors</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/uxsolutions/bootstrap-datepicker/contributors-list/master/js/bootstrap-datepicker.js" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
        <span class="">
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/eternicode/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=eternicode">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/324189?s=40&amp;v=4" width="20" height="20" alt="@eternicode" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/acrobat/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=acrobat">
      <img class="avatar mr-1" src="https://avatars3.githubusercontent.com/u/1374857?s=40&amp;v=4" width="20" height="20" alt="@acrobat" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/vsn4ik/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=vsn4ik">
      <img class="avatar mr-1" src="https://avatars3.githubusercontent.com/u/3757319?s=40&amp;v=4" width="20" height="20" alt="@vsn4ik" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/vitalets/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=vitalets">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/1473072?s=40&amp;v=4" width="20" height="20" alt="@vitalets" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/hebbet/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=hebbet">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/1423115?s=40&amp;v=4" width="20" height="20" alt="@hebbet" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/tcrosen/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=tcrosen">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/1195132?s=40&amp;v=4" width="20" height="20" alt="@tcrosen" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/osama9/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=osama9">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/3780410?s=40&amp;v=4" width="20" height="20" alt="@osama9" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/programcsharp/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=programcsharp">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/994270?s=40&amp;v=4" width="20" height="20" alt="@programcsharp" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/stanpalatnik/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=stanpalatnik">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/989540?s=40&amp;v=4" width="20" height="20" alt="@stanpalatnik" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/kylethielk/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=kylethielk">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/3186142?s=40&amp;v=4" width="20" height="20" alt="@kylethielk" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/fadomire/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=fadomire">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/1186197?s=40&amp;v=4" width="20" height="20" alt="@fadomire" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/Azaret/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=Azaret">
      <img class="avatar mr-1" src="https://avatars3.githubusercontent.com/u/1201743?s=40&amp;v=4" width="20" height="20" alt="@Azaret" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/abibell/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=abibell">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/544653?s=40&amp;v=4" width="20" height="20" alt="@abibell" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/fluffels/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=fluffels">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/2345151?s=40&amp;v=4" width="20" height="20" alt="@fluffels" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/nwhittaker/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=nwhittaker">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/421496?s=40&amp;v=4" width="20" height="20" alt="@nwhittaker" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/fabdouglas/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=fabdouglas">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/579170?s=40&amp;v=4" width="20" height="20" alt="@fabdouglas" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/divpreet/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=divpreet">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/2805650?s=40&amp;v=4" width="20" height="20" alt="@divpreet" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/dionysiosarvanitis/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=dionysiosarvanitis">
      <img class="avatar mr-1" src="https://avatars3.githubusercontent.com/u/1359269?s=40&amp;v=4" width="20" height="20" alt="@dionysiosarvanitis" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/wms/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=wms">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/663716?s=40&amp;v=4" width="20" height="20" alt="@wms" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/willrjmarshall/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=willrjmarshall">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/97204?s=40&amp;v=4" width="20" height="20" alt="@willrjmarshall" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/thetimbanks/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=thetimbanks">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/471801?s=40&amp;v=4" width="20" height="20" alt="@thetimbanks" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/steffendietz/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=steffendietz">
      <img class="avatar mr-1" src="https://avatars3.githubusercontent.com/u/11530?s=40&amp;v=4" width="20" height="20" alt="@steffendietz" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/steunix/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=steunix">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/3736185?s=40&amp;v=4" width="20" height="20" alt="@steunix" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/vanack/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=vanack">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/1371466?s=40&amp;v=4" width="20" height="20" alt="@vanack" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/ansman/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=ansman">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/102883?s=40&amp;v=4" width="20" height="20" alt="@ansman" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/matiasalvarez87/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js?author=matiasalvarez87">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/876864?s=40&amp;v=4" width="20" height="20" alt="@matiasalvarez87" /> 
</a>
    <button type="button" class="btn-link lh-default" data-toggle-for="blob_contributors_box">and others</button>
</span>

    </div>
  </div>






    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      2058 lines (1879 sloc)
      <span class="file-info-divider"></span>
    57.5 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/uxsolutions/bootstrap-datepicker/raw/master/js/bootstrap-datepicker.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/uxsolutions/bootstrap-datepicker/blame/master/js/bootstrap-datepicker.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/uxsolutions/bootstrap-datepicker/commits/master/js/bootstrap-datepicker.js">History</a>
    </div>


    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="https://desktop.github.com"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
          </a>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="2" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/* =========================================================</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * bootstrap-datepicker.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Repo: https://github.com/uxsolutions/bootstrap-datepicker/</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Demo: https://uxsolutions.github.io/bootstrap-datepicker/</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Docs: https://bootstrap-datepicker.readthedocs.org/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * =========================================================</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * https://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * ========================================================= */</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>factory</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>define</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;function&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>define</span><span class=pl-kos>.</span><span class=pl-c1>amd</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s>&#39;jquery&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>factory</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>exports</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;object&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>factory</span><span class=pl-kos>(</span><span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;jquery&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>factory</span><span class=pl-kos>(</span><span class=pl-s1>jQuery</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>,</span> <span class=pl-s1>undefined</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-c1>UTC</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>,</span> <span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-v>UTCToday</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>today</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-s1>today</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>today</span><span class=pl-kos>.</span><span class=pl-en>getMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>today</span><span class=pl-kos>.</span><span class=pl-en>getDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>isUTCEquals</span><span class=pl-kos>(</span><span class=pl-s1>date1</span><span class=pl-kos>,</span> <span class=pl-s1>date2</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>date1</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>date2</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>date1</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>date2</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>date1</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>date2</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>alias</span><span class=pl-kos>(</span><span class=pl-s1>method</span><span class=pl-kos>,</span> <span class=pl-s1>deprecationMsg</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>deprecationMsg</span> !== undefined<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-en>deprecated</span><span class=pl-kos>(</span><span class=pl-s1>deprecationMsg</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>[</span><span class=pl-s1>method</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>isValidDate</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>d</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getTime</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-v>DateArray</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>extras</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>get</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>contains</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Array.indexOf is not cross-browser;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// $.inArray doesn&#39;t work with Dates</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>val</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>l</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>l</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">          <span class=pl-c>// Use date arithmetic to allow dates with different times to match</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">          <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-c1>0</span> &lt;= <span class=pl-smi>this</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>val</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>val</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>1000</span>*<span class=pl-c1>60</span>*<span class=pl-c1>60</span>*<span class=pl-c1>24</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>i</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>remove</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>splice</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>replace</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>new_array</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>new_array</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isArray</span><span class=pl-kos>(</span><span class=pl-s1>new_array</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>new_array</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s1>new_array</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>push</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-s1>new_array</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clear</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>copy</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>a</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>DateArray</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>a</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>push</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span> <span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span> <span class=pl-s1>extras</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>// Picker object</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-v>Datepicker</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_secondaryEvents</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>DateArray</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInput</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s>&#39;input&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInput</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span> : <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;input&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;date&#39;</span><span class=pl-kos>)</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn&#39;</span><span class=pl-kos>)</span> : <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span> <span class=pl-c1>===</span> null<span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span> <span class=pl-c1>=</span> !<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInput</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>template</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// Checking templates and inserting</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_check_template</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>templates</span><span class=pl-kos>.</span><span class=pl-c1>leftArrow</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.prev&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>html</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>templates</span><span class=pl-kos>.</span><span class=pl-c1>leftArrow</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_check_template</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>templates</span><span class=pl-kos>.</span><span class=pl-c1>rightArrow</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.next&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>html</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>templates</span><span class=pl-kos>.</span><span class=pl-c1>rightArrow</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_buildEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_attachEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-inline&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>appendTo</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-dropdown dropdown-menu&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>rtl</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-rtl&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>calendarWeeks</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&#39;colspan&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>val</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>val</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>startDate</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>endDate</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>daysOfWeekDisabled</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekDisabled</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>daysOfWeekHighlighted</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekHighlighted</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>datesDisabled</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_allow_update</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setViewMode</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startView</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_allow_update</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fillDow</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fillMonths</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>show</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Datepicker</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>constructor</span>: <span class=pl-v>Datepicker</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_resolveViewName</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>view</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>viewModes</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>viewMode</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>view</span> <span class=pl-c1>===</span> <span class=pl-s1>i</span> <span class=pl-c1>||</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>view</span><span class=pl-kos>,</span> <span class=pl-s1>viewMode</span><span class=pl-kos>.</span><span class=pl-c1>names</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>view</span> <span class=pl-c1>=</span> <span class=pl-s1>i</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>view</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_resolveDaysOfWeek</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>daysOfWeek</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isArray</span><span class=pl-kos>(</span><span class=pl-s1>daysOfWeek</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>daysOfWeek</span> <span class=pl-c1>=</span> <span class=pl-s1>daysOfWeek</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>[</span>,<span class=pl-cce>\s</span><span class=pl-kos>]</span><span class=pl-c1>*</span>/</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-s1>daysOfWeek</span><span class=pl-kos>,</span> <span class=pl-v>Number</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_check_template</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>tmp</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// If empty</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>tmp</span> <span class=pl-c1>===</span> undefined <span class=pl-c1>||</span> <span class=pl-s1>tmp</span> <span class=pl-c1>===</span> <span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// If no html, everything ok</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>tmp</span><span class=pl-kos>.</span><span class=pl-en>match</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>[</span>&lt;&gt;<span class=pl-kos>]</span>/g</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> &lt;= <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Checking if html is fine</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>jDom</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>tmp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>jDom</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>ex</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_process_options</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>opts</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Store raw options for reference</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_o</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_o</span><span class=pl-kos>,</span> <span class=pl-s1>opts</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Processed options</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>o</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_o</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Check if &quot;de-DE&quot; style date is available, if not language should</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// fallback to 2 letter code eg &quot;de&quot;</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>lang</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>lang</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>lang</span> <span class=pl-c1>=</span> <span class=pl-s1>lang</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>lang</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>lang</span> <span class=pl-c1>=</span> <span class=pl-s1>defaults</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span> <span class=pl-c1>=</span> <span class=pl-s1>lang</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Retrieve view index from any aliases</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startView</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_resolveViewName</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startView</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>minViewMode</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_resolveViewName</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>minViewMode</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>maxViewMode</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_resolveViewName</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>maxViewMode</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Check view is between min and max</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startView</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>minViewMode</span><span class=pl-kos>,</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>maxViewMode</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startView</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// true, false, or Number &gt; 0</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> !== <span class=pl-c1>true</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> <span class=pl-c1>=</span> <span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> !== <span class=pl-c1>false</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidateSeparator</span> <span class=pl-c1>=</span> <span class=pl-v>String</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidateSeparator</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span> %= <span class=pl-c1>7</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekEnd</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span> <span class=pl-c1>+</span> <span class=pl-c1>6</span><span class=pl-kos>)</span> % <span class=pl-c1>7</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseFormat</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>format</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> !== <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!!<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> <span class=pl-k>instanceof</span> <span class=pl-v>Date</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_local_to_utc</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_zero_time</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseDate</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>assumeNearbyYear</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> <span class=pl-c1>=</span> <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> !== <span class=pl-v>Infinity</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!!<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> <span class=pl-k>instanceof</span> <span class=pl-v>Date</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_local_to_utc</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_zero_time</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseDate</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>assumeNearbyYear</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> <span class=pl-c1>=</span> <span class=pl-v>Infinity</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekDisabled</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_resolveDaysOfWeek</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekDisabled</span><span class=pl-c1>||</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekHighlighted</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_resolveDaysOfWeek</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekHighlighted</span><span class=pl-c1>||</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span><span class=pl-c1>||</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isArray</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;,&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseDate</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>assumeNearbyYear</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>plc</span> <span class=pl-c1>=</span> <span class=pl-v>String</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-cce>\s</span><span class=pl-c1>+</span>/g</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>_plc</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>plc</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>grep</span><span class=pl-kos>(</span><span class=pl-s1>plc</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>word</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-pds>/<span class=pl-cce>^</span>auto<span class=pl-c1>|</span>left<span class=pl-c1>|</span>right<span class=pl-c1>|</span>top<span class=pl-c1>|</span>bottom<span class=pl-cce>$</span>/</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span><span class=pl-s1>word</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>x</span>: <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>_plc</span> <span class=pl-c1>||</span> <span class=pl-s1>_plc</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>;</span> <span class=pl-c>// no action</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>plc</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>switch</span> <span class=pl-kos>(</span><span class=pl-s1>plc</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>case</span> <span class=pl-s>&#39;top&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>case</span> <span class=pl-s>&#39;bottom&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>y</span> <span class=pl-c1>=</span> <span class=pl-s1>plc</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>case</span> <span class=pl-s>&#39;left&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>case</span> <span class=pl-s>&#39;right&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>=</span> <span class=pl-s1>plc</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>_plc</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>grep</span><span class=pl-kos>(</span><span class=pl-s1>plc</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>word</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-pds>/<span class=pl-cce>^</span>left<span class=pl-c1>|</span>right<span class=pl-cce>$</span>/</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span><span class=pl-s1>word</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>=</span> <span class=pl-s1>_plc</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>_plc</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>grep</span><span class=pl-kos>(</span><span class=pl-s1>plc</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>word</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-pds>/<span class=pl-cce>^</span>top<span class=pl-c1>|</span>bottom<span class=pl-cce>$</span>/</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span><span class=pl-s1>word</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>y</span> <span class=pl-c1>=</span> <span class=pl-s1>_plc</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span> <span class=pl-k>instanceof</span> <span class=pl-v>Date</span> <span class=pl-c1>||</span> <span class=pl-k>typeof</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseDate</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>,</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>assumeNearbyYear</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>year</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>.</span><span class=pl-c1>year</span> <span class=pl-c1>||</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>.</span><span class=pl-c1>month</span> <span class=pl-c1>||</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>day</span> <span class=pl-c1>=</span> <span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>.</span><span class=pl-c1>day</span> <span class=pl-c1>||</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span> <span class=pl-c1>=</span> <span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>month</span><span class=pl-kos>,</span> <span class=pl-s1>day</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span> <span class=pl-c1>=</span> <span class=pl-v>UTCToday</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_applyEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>evs</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>el</span><span class=pl-kos>,</span> <span class=pl-s1>ch</span><span class=pl-kos>,</span> <span class=pl-s1>ev</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>evs</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>el</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ch</span> <span class=pl-c1>=</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ev</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>3</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ch</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ev</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>el</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s1>ev</span><span class=pl-kos>,</span> <span class=pl-s1>ch</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_unapplyEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>evs</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>el</span><span class=pl-kos>,</span> <span class=pl-s1>ev</span><span class=pl-kos>,</span> <span class=pl-s1>ch</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>evs</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>el</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ch</span> <span class=pl-c1>=</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ev</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>3</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ch</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ev</span> <span class=pl-c1>=</span> <span class=pl-s1>evs</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>el</span><span class=pl-kos>.</span><span class=pl-en>off</span><span class=pl-kos>(</span><span class=pl-s1>ev</span><span class=pl-kos>,</span> <span class=pl-s1>ch</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_buildEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>var</span> <span class=pl-s1>events</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>keyup</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span><span class=pl-kos>,</span> <span class=pl-kos>[</span><span class=pl-c1>27</span><span class=pl-kos>,</span> <span class=pl-c1>37</span><span class=pl-kos>,</span> <span class=pl-c1>39</span><span class=pl-kos>,</span> <span class=pl-c1>38</span><span class=pl-kos>,</span> <span class=pl-c1>40</span><span class=pl-kos>,</span> <span class=pl-c1>32</span><span class=pl-kos>,</span> <span class=pl-c1>13</span><span class=pl-kos>,</span> <span class=pl-c1>9</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">                        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>keydown</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>keydown</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>paste</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>paste</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>showOnFocus</span> <span class=pl-c1>===</span> <span class=pl-c1>true</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>events</span><span class=pl-kos>.</span><span class=pl-c1>focus</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>show</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInput</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-c>// single input</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">                <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>,</span> <span class=pl-s1>events</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">            <span class=pl-c>// component: input + button</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">                <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">                    <span class=pl-c>// For components that are not readonly, allow keyboard nav</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>,</span> <span class=pl-s1>events</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">                        <span class=pl-c1>click</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>show</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">                    <span class=pl-kos>}</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>click</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>show</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>keydown</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>keydown</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Component: listen for blur on element descendants</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;*&#39;</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>blur</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_focused_from</span> <span class=pl-c1>=</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Input: listen for blur on element</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>blur</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_focused_from</span> <span class=pl-c1>=</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>immediateUpdates</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Trigger input updates immediately on changed year/month</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">					<span class=pl-s>&#39;changeYear changeMonth&#39;</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_secondaryEvents</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>click</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>click</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>,</span> <span class=pl-s>&#39;.prev, .next&#39;</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>click</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>navArrowsClick</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>,</span> <span class=pl-s>&#39;.day:not(.disabled)&#39;</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>click</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dayCellClick</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>window</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>resize</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>place</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>[</span><span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">					<span class=pl-s>&#39;mousedown touchstart&#39;</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// Clicked outside the datepicker, hide it</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>)</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>)</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_attachEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_detachEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_applyEvents</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_detachEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_unapplyEvents</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_events</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_attachSecondaryEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_detachSecondaryEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_applyEvents</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_secondaryEvents</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_detachSecondaryEvents</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_unapplyEvents</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_secondaryEvents</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_trigger</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>altdate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-s1>altdate</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>local_date</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_utc_to_local</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>trigger</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>type</span>: <span class=pl-s1>event</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>date</span>: <span class=pl-s1>local_date</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>viewMode</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>dates</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_utc_to_local</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>format</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>ix</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>ix</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>format</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>ix</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-s1>ix</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>ix</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>format</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>var</span> <span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-s1>ix</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>formatDate</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>show</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s>&#39;:disabled&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>prop</span><span class=pl-kos>(</span><span class=pl-s>&#39;readonly&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>enableOnReadonly</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>appendTo</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>place</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>show</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_attachSecondaryEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;show&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>navigator</span><span class=pl-kos>.</span><span class=pl-c1>msMaxTouchPoints</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;ontouchstart&#39;</span> <span class=pl-k>in</span> <span class=pl-smi>document</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>disableTouchKeyboard</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>blur</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>hide</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span> <span class=pl-c1>||</span> !<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s>&#39;:visible&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>detach</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_detachSecondaryEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setViewMode</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startView</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>forceParse</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setValue</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;hide&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>destroy</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_detachEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_detachSecondaryEvents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>remove</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInput</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>paste</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>dateString</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>originalEvent</span><span class=pl-kos>.</span><span class=pl-c1>clipboardData</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>originalEvent</span><span class=pl-kos>.</span><span class=pl-c1>clipboardData</span><span class=pl-kos>.</span><span class=pl-c1>types</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s>&#39;text/plain&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>originalEvent</span><span class=pl-kos>.</span><span class=pl-c1>clipboardData</span><span class=pl-kos>.</span><span class=pl-c1>types</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dateString</span> <span class=pl-c1>=</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>originalEvent</span><span class=pl-kos>.</span><span class=pl-c1>clipboardData</span><span class=pl-kos>.</span><span class=pl-en>getData</span><span class=pl-kos>(</span><span class=pl-s>&#39;text/plain&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>clipboardData</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dateString</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>clipboardData</span><span class=pl-kos>.</span><span class=pl-en>getData</span><span class=pl-kos>(</span><span class=pl-s>&#39;Text&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setDate</span><span class=pl-kos>(</span><span class=pl-s1>dateString</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_utc_to_local</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>utc</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>utc</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>utc</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>local</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getTime</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getTimezoneOffset</span><span class=pl-kos>(</span><span class=pl-kos>)</span> * <span class=pl-c1>60000</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getTimezoneOffset</span><span class=pl-kos>(</span><span class=pl-kos>)</span> !== <span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getTimezoneOffset</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>local</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getTime</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getTimezoneOffset</span><span class=pl-kos>(</span><span class=pl-kos>)</span> * <span class=pl-c1>60000</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>local</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_local_to_utc</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>local</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getTime</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getTimezoneOffset</span><span class=pl-kos>(</span><span class=pl-kos>)</span>*<span class=pl-c1>60000</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_zero_time</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>local</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>local</span><span class=pl-kos>.</span><span class=pl-en>getDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_zero_utc_time</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>utc</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>utc</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>utc</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_utc_to_local</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getUTCDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_utc_to_local</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getUTCDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>selected_date</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>selected_date</span> !== undefined<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>selected_date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>clearDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>autoclose</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>args</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isArray</span><span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span> ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> : <span class=pl-smi>arguments</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>update</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-s1>args</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setValue</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setUTCDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>args</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isArray</span><span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span> ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> : <span class=pl-smi>arguments</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>setDates</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-s1>args</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_utc_to_local</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>setDate</span>: <span class=pl-en>alias</span><span class=pl-kos>(</span><span class=pl-s>&#39;setDates&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>setUTCDate</span>: <span class=pl-en>alias</span><span class=pl-kos>(</span><span class=pl-s>&#39;setUTCDates&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>remove</span>: <span class=pl-en>alias</span><span class=pl-kos>(</span><span class=pl-s>&#39;destroy&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setValue</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>formatted</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>getFormattedDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-s1>formatted</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getFormattedDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>format</span> <span class=pl-c1>===</span> undefined<span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>format</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>lang</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>formatDate</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>lang</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>join</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidateSeparator</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getStartDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setStartDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>startDate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>startDate</span>: <span class=pl-s1>startDate</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateNavArrows</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getEndDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setEndDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>endDate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>endDate</span>: <span class=pl-s1>endDate</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateNavArrows</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setDaysOfWeekDisabled</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>daysOfWeekDisabled</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>daysOfWeekDisabled</span>: <span class=pl-s1>daysOfWeekDisabled</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setDaysOfWeekHighlighted</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>daysOfWeekHighlighted</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>daysOfWeekHighlighted</span>: <span class=pl-s1>daysOfWeekHighlighted</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setDatesDisabled</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>datesDisabled</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_process_options</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>datesDisabled</span>: <span class=pl-s1>datesDisabled</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>place</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInline</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>calendarWidth</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>outerWidth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>calendarHeight</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>outerHeight</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>visualPadding</span> <span class=pl-c1>=</span> <span class=pl-c1>10</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>container</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>windowWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>width</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>scrollTop</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>container</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;body&#39;</span> ? <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>scrollTop</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>scrollTop</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>appendOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>offset</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>parentsZindex</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>parents</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>itemZIndex</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-s>&#39;z-index&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>itemZIndex</span> !== <span class=pl-s>&#39;auto&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>itemZIndex</span><span class=pl-kos>)</span> !== <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-s1>parentsZindex</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>itemZIndex</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>zIndex</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>,</span> <span class=pl-s1>parentsZindex</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>zIndexOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>offset</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span><span class=pl-kos>.</span><span class=pl-en>parent</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>offset</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>offset</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span><span class=pl-kos>.</span><span class=pl-en>outerHeight</span><span class=pl-kos>(</span><span class=pl-c1>true</span><span class=pl-kos>)</span> : <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>outerHeight</span><span class=pl-kos>(</span><span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>component</span><span class=pl-kos>.</span><span class=pl-en>outerWidth</span><span class=pl-kos>(</span><span class=pl-c1>true</span><span class=pl-kos>)</span> : <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>outerWidth</span><span class=pl-kos>(</span><span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>left</span> <span class=pl-c1>=</span> <span class=pl-s1>offset</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>appendOffset</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>top</span> <span class=pl-c1>=</span> <span class=pl-s1>offset</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>appendOffset</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>container</span> !== <span class=pl-s>&#39;body&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>removeClass</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;datepicker-orient-top datepicker-orient-bottom &#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;datepicker-orient-right datepicker-orient-left&#39;</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>x</span> !== <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-orient-&#39;</span> <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>left</span> <span class=pl-c1>-=</span> <span class=pl-s1>calendarWidth</span> <span class=pl-c1>-</span> <span class=pl-s1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// auto x orientation is best-placement: if it crosses a window</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// edge, fudge it sideways</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>offset</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// component is outside the window on the left side. Move it into visible range</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-orient-left&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>left</span> <span class=pl-c1>-=</span> <span class=pl-s1>offset</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>visualPadding</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>left</span> <span class=pl-c1>+</span> <span class=pl-s1>calendarWidth</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>windowWidth</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// the calendar passes the widow right edge. Align it to component right side</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-orient-right&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>calendarWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>rtl</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// Default to right</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-orient-right&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// Default to left</span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-orient-left&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// auto y orientation is best-situation: top or bottom, no fudging,</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// decision based on which shows more of the calendar</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yorient</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>orientation</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>top_overflow</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>yorient</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>top_overflow</span> <span class=pl-c1>=</span> <span class=pl-c1>-</span><span class=pl-s1>scrollTop</span> <span class=pl-c1>+</span> <span class=pl-s1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>calendarHeight</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>yorient</span> <span class=pl-c1>=</span> <span class=pl-s1>top_overflow</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>0</span> ? <span class=pl-s>&#39;bottom&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-orient-&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>yorient</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>yorient</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>top</span> <span class=pl-c1>-=</span> <span class=pl-s1>calendarHeight</span> <span class=pl-c1>+</span> <span class=pl-en>parseInt</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-s>&#39;padding-top&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>rtl</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>right</span> <span class=pl-c1>=</span> <span class=pl-s1>windowWidth</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>left</span> <span class=pl-c1>+</span> <span class=pl-s1>width</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>top</span>: <span class=pl-s1>top</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>right</span>: <span class=pl-s1>right</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>zIndex</span>: <span class=pl-s1>zIndex</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>top</span>: <span class=pl-s1>top</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>left</span>: <span class=pl-s1>left</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>zIndex</span>: <span class=pl-s1>zIndex</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>_allow_update</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>update</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_allow_update</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>oldDates</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>copy</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>fromArgs</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>,</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span> <span class=pl-k>instanceof</span> <span class=pl-v>Date</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_local_to_utc</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>dates</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>fromArgs</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>isInput</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">						? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">						: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s>&#39;date&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>dates</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-s1>dates</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidateSeparator</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s1>dates</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-s1>dates</span><span class=pl-kos>,</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseDate</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>format</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>assumeNearbyYear</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>grep</span><span class=pl-kos>(</span><span class=pl-s1>dates</span><span class=pl-kos>,</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">					!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>dateWithinRange</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">					!<span class=pl-s1>date</span></td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>true</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-s1>dates</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>updateViewDate</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>fromArgs</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// setting date by clicking</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setValue</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>change</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// setting date by typing</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-v>String</span><span class=pl-kos>(</span><span class=pl-s1>oldDates</span><span class=pl-kos>)</span> !== <span class=pl-v>String</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>fromArgs</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>change</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>oldDates</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;clearDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>change</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>fillDow</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>showWeekDays</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>dowCnt</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&lt;tr&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>calendarWeeks</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39;&lt;th class=&quot;cw&quot;&gt;&amp;#160;&lt;/th&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>dowCnt</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span> <span class=pl-c1>+</span> <span class=pl-c1>7</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39;&lt;th class=&quot;dow&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>dowCnt</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekDisabled</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">          <span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39; disabled&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39;&quot;&gt;&#39;</span><span class=pl-c1>+</span><span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>daysMin</span><span class=pl-kos>[</span><span class=pl-kos>(</span><span class=pl-s1>dowCnt</span><span class=pl-c1>++</span><span class=pl-kos>)</span>%<span class=pl-c1>7</span><span class=pl-kos>]</span><span class=pl-c1>+</span><span class=pl-s>&#39;&lt;/th&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39;&lt;/tr&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-days thead&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>fillMonths</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>localDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_utc_to_local</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>focused</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>12</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>focused</span> <span class=pl-c1>=</span> <span class=pl-s1>localDate</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>localDate</span><span class=pl-kos>.</span><span class=pl-en>getMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>i</span> ? <span class=pl-s>&#39; focused&#39;</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39;&lt;span class=&quot;month&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>focused</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&quot;&gt;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>monthsShort</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&lt;/span&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-months td&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>html</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setRange</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>range</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>range</span> <span class=pl-c1>||</span> !<span class=pl-s1>range</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-s1>range</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>getClassNames</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>cls</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>year</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>today</span> <span class=pl-c1>=</span> <span class=pl-v>UTCToday</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>year</span> <span class=pl-c1>||</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>year</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;old&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>year</span> <span class=pl-c1>||</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>year</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;new&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;focused&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Compare internal UTC date with UTC today, not local today</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>todayHighlight</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-en>isUTCEquals</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>today</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;today&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>contains</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;active&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>dateWithinRange</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>dateIsDisabled</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;disabled-date&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekHighlighted</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;highlighted&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>date</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;range&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;selected&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">          <span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;range-start&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>range</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">          <span class=pl-s1>cls</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;range-end&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>cls</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_fill_yearsView</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>selector</span><span class=pl-kos>,</span> <span class=pl-s1>cssClass</span><span class=pl-kos>,</span> <span class=pl-s1>factor</span><span class=pl-kos>,</span> <span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>startYear</span><span class=pl-kos>,</span> <span class=pl-s1>endYear</span><span class=pl-kos>,</span> <span class=pl-s1>beforeFn</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>step</span> <span class=pl-c1>=</span> <span class=pl-s1>factor</span> / <span class=pl-c1>10</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>view</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>selector</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>startVal</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>year</span> / <span class=pl-s1>factor</span><span class=pl-kos>)</span> * <span class=pl-s1>factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>endVal</span> <span class=pl-c1>=</span> <span class=pl-s1>startVal</span> <span class=pl-c1>+</span> <span class=pl-s1>step</span> * <span class=pl-c1>9</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>focusedVal</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> / <span class=pl-s1>step</span><span class=pl-kos>)</span> * <span class=pl-s1>step</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>selected</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> / <span class=pl-s1>step</span><span class=pl-kos>)</span> * <span class=pl-s1>step</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>classes</span><span class=pl-kos>,</span> <span class=pl-s1>tooltip</span><span class=pl-kos>,</span> <span class=pl-s1>before</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>currVal</span> <span class=pl-c1>=</span> <span class=pl-s1>startVal</span> <span class=pl-c1>-</span> <span class=pl-s1>step</span><span class=pl-kos>;</span> <span class=pl-s1>currVal</span> &lt;= <span class=pl-s1>endVal</span> <span class=pl-c1>+</span> <span class=pl-s1>step</span><span class=pl-kos>;</span> <span class=pl-s1>currVal</span> <span class=pl-c1>+=</span> <span class=pl-s1>step</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>classes</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s1>cssClass</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>tooltip</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>currVal</span> <span class=pl-c1>===</span> <span class=pl-s1>startVal</span> <span class=pl-c1>-</span> <span class=pl-s1>step</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;old&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>currVal</span> <span class=pl-c1>===</span> <span class=pl-s1>endVal</span> <span class=pl-c1>+</span> <span class=pl-s1>step</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;new&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>currVal</span><span class=pl-kos>,</span> <span class=pl-s1>selected</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;active&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>currVal</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>startYear</span> <span class=pl-c1>||</span> <span class=pl-s1>currVal</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>endYear</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>currVal</span> <span class=pl-c1>===</span> <span class=pl-s1>focusedVal</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">				  <span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;focused&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>beforeFn</span> !== <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-s1>beforeFn</span><span class=pl-kos>(</span><span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>currVal</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span> <span class=pl-c1>===</span> undefined<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>before</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;boolean&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>enabled</span>: <span class=pl-s1>before</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>before</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>classes</span>: <span class=pl-s1>before</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>classes</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>classes</span> <span class=pl-c1>=</span> <span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>concat</span><span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>classes</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-cce>\s</span><span class=pl-c1>+</span>/</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>tooltip</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>tooltip</span> <span class=pl-c1>=</span> <span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>tooltip</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>html</span> <span class=pl-c1>+=</span> <span class=pl-s>&#39;&lt;span class=&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>classes</span><span class=pl-kos>.</span><span class=pl-en>join</span><span class=pl-kos>(</span><span class=pl-s>&#39; &#39;</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>tooltip</span> ? <span class=pl-s>&#39; title=&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>tooltip</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&quot;&#39;</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&gt;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>currVal</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&lt;/span&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>view</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-switch&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s1>startVal</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;-&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>endVal</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>view</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;td&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>html</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>fill</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>d</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>year</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startYear</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> !== <span class=pl-c1>-</span><span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startMonth</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> !== <span class=pl-c1>-</span><span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endYear</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> !== <span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endMonth</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> !== <span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>todaytxt</span> <span class=pl-c1>=</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>today</span> <span class=pl-c1>||</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s>&#39;en&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>today</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>cleartxt</span> <span class=pl-c1>=</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>clear</span> <span class=pl-c1>||</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s>&#39;en&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>clear</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>titleFormat</span> <span class=pl-c1>=</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>titleFormat</span> <span class=pl-c1>||</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s>&#39;en&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>titleFormat</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>todayDate</span> <span class=pl-c1>=</span> <span class=pl-v>UTCToday</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>titleBtnVisible</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>todayBtn</span> <span class=pl-c1>===</span> <span class=pl-c1>true</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>todayBtn</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;linked&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>todayDate</span> &gt;= <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>todayDate</span> &lt;= <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>weekOfDateIsDisabled</span><span class=pl-kos>(</span><span class=pl-s1>todayDate</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>tooltip</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>before</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-days .datepicker-switch&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>formatDate</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>titleFormat</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;tfoot .today&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s1>todaytxt</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-s>&#39;display&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>titleBtnVisible</span> ? <span class=pl-s>&#39;table-cell&#39;</span> : <span class=pl-s>&#39;none&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;tfoot .clear&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s1>cleartxt</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-s>&#39;display&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>clearBtn</span> <span class=pl-c1>===</span> <span class=pl-c1>true</span> ? <span class=pl-s>&#39;table-cell&#39;</span> : <span class=pl-s>&#39;none&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;thead .datepicker-title&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>title</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>css</span><span class=pl-kos>(</span><span class=pl-s>&#39;display&#39;</span><span class=pl-kos>,</span> <span class=pl-k>typeof</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>title</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>title</span> !== <span class=pl-s>&#39;&#39;</span> ? <span class=pl-s>&#39;table-cell&#39;</span> : <span class=pl-s>&#39;none&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateNavArrows</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fillMonths</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>prevMonth</span> <span class=pl-c1>=</span> <span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>month</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>day</span> <span class=pl-c1>=</span> <span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>day</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span> <span class=pl-c1>+</span> <span class=pl-c1>7</span><span class=pl-kos>)</span>%<span class=pl-c1>7</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>nextMonth</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>100</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>nextMonth</span><span class=pl-kos>.</span><span class=pl-en>setUTCFullYear</span><span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>nextMonth</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>nextMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>42</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>nextMonth</span> <span class=pl-c1>=</span> <span class=pl-s1>nextMonth</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>weekDay</span><span class=pl-kos>,</span> <span class=pl-s1>clsName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>nextMonth</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>weekDay</span> <span class=pl-c1>=</span> <span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>weekDay</span> <span class=pl-c1>===</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;&lt;tr&gt;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>calendarWeeks</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// ISO 8601: First week contains first thursday.</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// ISO also states week starts on Monday, but we can be more abstract here.</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// Start of current week: based on weekstart/current date</span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>ws</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-c1>+</span><span class=pl-s1>prevMonth</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekStart</span> <span class=pl-c1>-</span> <span class=pl-s1>weekDay</span> <span class=pl-c1>-</span> <span class=pl-c1>7</span><span class=pl-kos>)</span> % <span class=pl-c1>7</span> * <span class=pl-c1>864e5</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// Thursday of this week</span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>th</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>ws</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-c1>7</span> <span class=pl-c1>+</span> <span class=pl-c1>4</span> <span class=pl-c1>-</span> <span class=pl-s1>ws</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> % <span class=pl-c1>7</span> * <span class=pl-c1>864e5</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// First Thursday of year, year from thursday</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>yth</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>yth</span> <span class=pl-c1>=</span> <span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-s1>th</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-c1>7</span> <span class=pl-c1>+</span> <span class=pl-c1>4</span> <span class=pl-c1>-</span> <span class=pl-s1>yth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> % <span class=pl-c1>7</span> * <span class=pl-c1>864e5</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// Calendar week: ms between thursdays, div ms per day, div 7 days</span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>calWeek</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>th</span> <span class=pl-c1>-</span> <span class=pl-s1>yth</span><span class=pl-kos>)</span> / <span class=pl-c1>864e5</span> / <span class=pl-c1>7</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;&lt;td class=&quot;cw&quot;&gt;&#39;</span><span class=pl-c1>+</span> <span class=pl-s1>calWeek</span> <span class=pl-c1>+</span><span class=pl-s>&#39;&lt;/td&gt;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>clsName</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>getClassNames</span><span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>clsName</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;day&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>content</span> <span class=pl-c1>=</span> <span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>beforeShowDay</span> !== <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-en>beforeShowDay</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_utc_to_local</span><span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span> <span class=pl-c1>===</span> undefined<span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>before</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;boolean&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>enabled</span>: <span class=pl-s1>before</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>before</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>classes</span>: <span class=pl-s1>before</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>clsName</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>classes</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>clsName</span> <span class=pl-c1>=</span> <span class=pl-s1>clsName</span><span class=pl-kos>.</span><span class=pl-en>concat</span><span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>classes</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-cce>\s</span><span class=pl-c1>+</span>/</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>tooltip</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>tooltip</span> <span class=pl-c1>=</span> <span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>tooltip</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>content</span> <span class=pl-c1>=</span> <span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>//Check if uniqueSort exists (supported by jquery &gt;=1.12 and &gt;=2.2)</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>//Fallback to unique function for older jquery versions</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isFunction</span><span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>uniqueSort</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>clsName</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>uniqueSort</span><span class=pl-kos>(</span><span class=pl-s1>clsName</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>clsName</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>unique</span><span class=pl-kos>(</span><span class=pl-s1>clsName</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;&lt;td class=&quot;&#39;</span><span class=pl-c1>+</span><span class=pl-s1>clsName</span><span class=pl-kos>.</span><span class=pl-en>join</span><span class=pl-kos>(</span><span class=pl-s>&#39; &#39;</span><span class=pl-kos>)</span><span class=pl-c1>+</span><span class=pl-s>&#39;&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>tooltip</span> ? <span class=pl-s>&#39; title=&quot;&#39;</span><span class=pl-c1>+</span><span class=pl-s1>tooltip</span><span class=pl-c1>+</span><span class=pl-s>&#39;&quot;&#39;</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&#39; data-date=&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getTime</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toString</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&quot;&gt;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>content</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&lt;/td&gt;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>tooltip</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>weekDay</span> <span class=pl-c1>===</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>weekEnd</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s>&#39;&lt;/tr&gt;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>prevMonth</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-days tbody&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>html</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-en>join</span><span class=pl-kos>(</span><span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>monthsTitle</span> <span class=pl-c1>=</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>monthsTitle</span> <span class=pl-c1>||</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s>&#39;en&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>monthsTitle</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;Months&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>months</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-months&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-switch&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>maxViewMode</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span> ? <span class=pl-s1>monthsTitle</span> : <span class=pl-s1>year</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>end</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;tbody span&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>removeClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;active&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>year</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>months</span><span class=pl-kos>.</span><span class=pl-en>eq</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;active&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>year</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>startYear</span> <span class=pl-c1>||</span> <span class=pl-s1>year</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>endYear</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>months</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>year</span> <span class=pl-c1>===</span> <span class=pl-s1>startYear</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>months</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>startMonth</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>year</span> <span class=pl-c1>===</span> <span class=pl-s1>endYear</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>months</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-s1>endMonth</span><span class=pl-c1>+</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>beforeShowMonth</span> !== <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>that</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-s1>months</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">          <span class=pl-k>var</span> <span class=pl-s1>moDate</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">          <span class=pl-k>var</span> <span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-s1>that</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-en>beforeShowMonth</span><span class=pl-kos>(</span><span class=pl-s1>moDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span> <span class=pl-c1>===</span> undefined<span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>before</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;boolean&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>enabled</span>: <span class=pl-s1>before</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>before</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>before</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>classes</span>: <span class=pl-s1>before</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">					    <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>classes</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">					    <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>addClass</span><span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>classes</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>tooltip</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">					    <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>prop</span><span class=pl-kos>(</span><span class=pl-s>&#39;title&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>before</span><span class=pl-kos>.</span><span class=pl-c1>tooltip</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Generating decade/years picker</span></td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_fill_yearsView</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;.datepicker-years&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;year&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>10</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>year</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startYear</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endYear</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>beforeShowYear</span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Generating century/decades picker</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_fill_yearsView</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;.datepicker-decades&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;decade&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>100</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>year</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startYear</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endYear</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>beforeShowDecade</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Generating millennium/centuries picker</span></td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_fill_yearsView</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;.datepicker-centuries&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">				<span class=pl-s>&#39;century&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>1000</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>year</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startYear</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endYear</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>beforeShowCentury</span></td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>updateNavArrows</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_allow_update</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>d</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>year</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startYear</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> !== <span class=pl-c1>-</span><span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>startMonth</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> !== <span class=pl-c1>-</span><span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endYear</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> !== <span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>endMonth</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span> !== <span class=pl-v>Infinity</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>prevIsDisabled</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>nextIsDisabled</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>factor</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>switch</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>4</span>:</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>factor</span> *= <span class=pl-c1>10</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>3</span>:</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>factor</span> *= <span class=pl-c1>10</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>2</span>:</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>factor</span> *= <span class=pl-c1>10</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>/* falls through */</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>1</span>:</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>prevIsDisabled</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>year</span> / <span class=pl-s1>factor</span><span class=pl-kos>)</span> * <span class=pl-s1>factor</span> &lt;= <span class=pl-s1>startYear</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>nextIsDisabled</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>year</span> / <span class=pl-s1>factor</span><span class=pl-kos>)</span> * <span class=pl-s1>factor</span> <span class=pl-c1>+</span> <span class=pl-s1>factor</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>endYear</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>0</span>:</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>prevIsDisabled</span> <span class=pl-c1>=</span> <span class=pl-s1>year</span> &lt;= <span class=pl-s1>startYear</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>month</span> &lt;= <span class=pl-s1>startMonth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>nextIsDisabled</span> <span class=pl-c1>=</span> <span class=pl-s1>year</span> &gt;= <span class=pl-s1>endYear</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>month</span> &gt;= <span class=pl-s1>endMonth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.prev&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toggleClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>prevIsDisabled</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;.next&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toggleClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>nextIsDisabled</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>click</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>stopPropagation</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>target</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s1>day</span><span class=pl-kos>,</span> <span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>month</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>target</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Clicked on the switch</span></td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker-switch&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> !== <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>maxViewMode</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setViewMode</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Clicked on today button</span></td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;today&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;day&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setViewMode</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_setDate</span><span class=pl-kos>(</span><span class=pl-v>UTCToday</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>todayBtn</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;linked&#39;</span> ? null : <span class=pl-s>&#39;view&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Clicked on clear button</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;clear&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>clearDates</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;disabled&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Clicked on a month, year, decade, century</span></td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;month&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>||</span> <span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;year&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>||</span> <span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;decade&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>||</span> <span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;century&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>day</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>===</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>parent</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;span&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>index</span><span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>year</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>setUTCMonth</span><span class=pl-kos>(</span><span class=pl-s1>month</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>year</span> <span class=pl-c1>=</span> <span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>setUTCFullYear</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>viewModes</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>e</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>===</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>minViewMode</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_setDate</span><span class=pl-kos>(</span><span class=pl-v>UTCDate</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>month</span><span class=pl-kos>,</span> <span class=pl-s1>day</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setViewMode</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s>&#39;:visible&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_focused_from</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_focused_from</span><span class=pl-kos>.</span><span class=pl-en>focus</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_focused_from</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>dayCellClick</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>$target</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>currentTarget</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-s1>$target</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s>&#39;date&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>timestamp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>updateViewDate</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> !== <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeYear&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> !== <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeMonth&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_setDate</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// Clicked on prev or next</span></td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>navArrowsClick</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>$target</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>currentTarget</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>dir</span> <span class=pl-c1>=</span> <span class=pl-s1>$target</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;prev&#39;</span><span class=pl-kos>)</span> ? <span class=pl-c1>-</span><span class=pl-c1>1</span> : <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> !== <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dir</span> *= <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>viewModes</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>navStep</span> * <span class=pl-c1>12</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveMonth</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>viewModes</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>e</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_toggle_multidate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>ix</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>contains</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>ix</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> <span class=pl-c1>===</span> <span class=pl-c1>true</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>toggleActive</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>remove</span><span class=pl-kos>(</span><span class=pl-s1>ix</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;number&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>multidate</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>remove</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>_setDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>which</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>which</span> <span class=pl-c1>||</span> <span class=pl-s1>which</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;date&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_toggle_multidate</span><span class=pl-kos>(</span><span class=pl-s1>date</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-kos>(</span>!<span class=pl-s1>which</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>updateViewDate</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s1>which</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;view&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-s1>date</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setValue</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>which</span> <span class=pl-c1>||</span> <span class=pl-s1>which</span> !== <span class=pl-s>&#39;view&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;change&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>autoclose</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span>!<span class=pl-s1>which</span> <span class=pl-c1>||</span> <span class=pl-s1>which</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;date&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>moveDay</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>newDate</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>newDate</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>newDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>moveWeek</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveDay</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span> * <span class=pl-c1>7</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>moveMonth</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-en>isValidDate</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>defaultViewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>dir</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>new_date</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>day</span> <span class=pl-c1>=</span> <span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>month</span> <span class=pl-c1>=</span> <span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>mag</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>abs</span><span class=pl-kos>(</span><span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_month</span><span class=pl-kos>,</span> <span class=pl-s1>test</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>dir</span> <span class=pl-c1>=</span> <span class=pl-s1>dir</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> ? <span class=pl-c1>1</span> : <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>mag</span> <span class=pl-c1>===</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>test</span> <span class=pl-c1>=</span> <span class=pl-s1>dir</span> <span class=pl-c1>===</span> <span class=pl-c1>-</span><span class=pl-c1>1</span></td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// If going back one month, make sure month is not current month</span></td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// (eg, Mar 31 -&gt; Feb 31 == Feb 28, not Mar 02)</span></td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">					? <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>month</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// If going forward one month, make sure month is as expected</span></td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// (eg, Jan 31 -&gt; Feb 31 == Feb 28, not Mar 02)</span></td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">					: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> !== <span class=pl-s1>new_month</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_month</span> <span class=pl-c1>=</span> <span class=pl-s1>month</span> <span class=pl-c1>+</span> <span class=pl-s1>dir</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>setUTCMonth</span><span class=pl-kos>(</span><span class=pl-s1>new_month</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Dec -&gt; Jan (12) or Jan -&gt; Dec (-1) -- limit expected date to 0-11</span></td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_month</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>new_month</span> <span class=pl-c1>+</span> <span class=pl-c1>12</span><span class=pl-kos>)</span> % <span class=pl-c1>12</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// For magnitudes &gt;1, move one month at a time...</span></td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>mag</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...</span></td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>new_date</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveMonth</span><span class=pl-kos>(</span><span class=pl-s1>new_date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// ...then reset the day, keeping it in the new month</span></td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_month</span> <span class=pl-c1>=</span> <span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>day</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>test</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-s1>new_month</span> !== <span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Common date-resetting loop -- if date is beyond end of month, make it</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// end of month</span></td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>test</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-c1>--</span><span class=pl-s1>day</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>new_date</span><span class=pl-kos>.</span><span class=pl-en>setUTCMonth</span><span class=pl-kos>(</span><span class=pl-s1>new_month</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>new_date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>moveYear</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveMonth</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span>*<span class=pl-c1>12</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>moveAvailableDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s1>fn</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>do</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>[</span><span class=pl-s1>fn</span><span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>dateWithinRange</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>fn</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;moveDay&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>dateIsDisabled</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>weekOfDateIsDisabled</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekDisabled</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>dateIsDisabled</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>weekOfDateIsDisabled</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>grep</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>datesDisabled</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-en>isUTCEquals</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span></td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>dateWithinRange</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>date</span> &gt;= <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>startDate</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>date</span> &lt;= <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>endDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>keydown</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s>&#39;:visible&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>40</span> <span class=pl-c1>||</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>27</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-c>// allow down to re-show picker</span></td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>show</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>stopPropagation</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>dateChanged</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s1>newViewDate</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>focusDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>switch</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>27</span>: <span class=pl-c>// escape</span></td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>stopPropagation</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>37</span>: <span class=pl-c>// left</span></td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>38</span>: <span class=pl-c>// up</span></td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>39</span>: <span class=pl-c>// right</span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>40</span>: <span class=pl-c>// down</span></td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>keyboardNavigation</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>daysOfWeekDisabled</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>7</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>dir</span> <span class=pl-c1>=</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>37</span> <span class=pl-c1>||</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>38</span> ? <span class=pl-c1>-</span><span class=pl-c1>1</span> : <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">          <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">  					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>ctrlKey</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">  						<span class=pl-s1>newViewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveAvailableDate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s>&#39;moveYear&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">  						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>newViewDate</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">  							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeYear&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">  					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>shiftKey</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">  						<span class=pl-s1>newViewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveAvailableDate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s>&#39;moveMonth&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">  						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>newViewDate</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">  							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeMonth&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">  					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>37</span> <span class=pl-c1>||</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>39</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">  						<span class=pl-s1>newViewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveAvailableDate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s>&#39;moveDay&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">  					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>weekOfDateIsDisabled</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">  						<span class=pl-s1>newViewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveAvailableDate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s>&#39;moveWeek&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">  					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">          <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>===</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>38</span> <span class=pl-c1>||</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>40</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">              <span class=pl-s1>dir</span> <span class=pl-c1>=</span> <span class=pl-s1>dir</span> * <span class=pl-c1>4</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>newViewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveAvailableDate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s>&#39;moveMonth&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">          <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>===</span> <span class=pl-c1>2</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>38</span> <span class=pl-c1>||</span> <span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>keyCode</span> <span class=pl-c1>===</span> <span class=pl-c1>40</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">              <span class=pl-s1>dir</span> <span class=pl-c1>=</span> <span class=pl-s1>dir</span> * <span class=pl-c1>4</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>newViewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>moveAvailableDate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s>&#39;moveYear&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">          <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>newViewDate</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-s1>newViewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setValue</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>13</span>: <span class=pl-c>// enter</span></td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>forceParse</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>focusDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>keyboardNavigation</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_toggle_multidate</span><span class=pl-kos>(</span><span class=pl-s1>focusDate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>dateChanged</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setValue</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span><span class=pl-kos>.</span><span class=pl-en>is</span><span class=pl-kos>(</span><span class=pl-s>&#39;:visible&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>stopPropagation</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>o</span><span class=pl-kos>.</span><span class=pl-c1>autoclose</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-c1>9</span>: <span class=pl-c>// tab</span></td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>focusDate</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-en>get</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>dateChanged</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;clearDate&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputField</span><span class=pl-kos>.</span><span class=pl-en>trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;change&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>setViewMode</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>viewMode</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span> <span class=pl-c1>=</span> <span class=pl-s1>viewMode</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>picker</span></td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>.</span><span class=pl-en>children</span><span class=pl-kos>(</span><span class=pl-s>&#39;div&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>.</span><span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>.</span><span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-s>&#39;.datepicker-&#39;</span> <span class=pl-c1>+</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>viewModes</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewMode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>clsName</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>show</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateNavArrows</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">      <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_trigger</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeViewMode&#39;</span><span class=pl-kos>,</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>viewDate</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-v>DateRangePicker</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>jquery</span> ? <span class=pl-s1>i</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> : <span class=pl-s1>i</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>delete</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>keepEmptyValues</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>keepEmptyValues</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>delete</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>keepEmptyValues</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>datepickerPlugin</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>proxy</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dateUpdated</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateDates</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>DateRangePicker</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>updateDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateRanges</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>updateRanges</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>range</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>valueOf</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>p</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-en>setRange</span><span class=pl-kos>(</span><span class=pl-s1>range</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>clearDates</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>p</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-en>clearDates</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>dateUpdated</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// `this.updating` is a workaround for preventing infinite recursion</span></td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// between `changeDate` triggering and `setUTCDate` calling.  Until</span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// there is a better mechanism.</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>updating</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>updating</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>dp</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>,</span> <span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>dp</span> <span class=pl-c1>===</span> undefined<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>new_date</span> <span class=pl-c1>=</span> <span class=pl-s1>dp</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>keep_empty_values</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>keepEmptyValues</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>j</span> <span class=pl-c1>=</span> <span class=pl-s1>i</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>k</span> <span class=pl-c1>=</span> <span class=pl-s1>i</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>l</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>i</span> <span class=pl-c1>===</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>p</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span><span class=pl-s1>p</span> <span class=pl-c1>===</span> <span class=pl-s1>dp</span> <span class=pl-c1>||</span> !<span class=pl-s1>keep_empty_values</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>new_date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>new_date</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Date being moved earlier/left</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>j</span> &gt;= <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>new_date</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-c1>--</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>new_date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>new_date</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Date being moved later/right</span></td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>k</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>l</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>new_date</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dates</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>val</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">					<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-c1>++</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>new_date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>updateDates</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>updating</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>destroy</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>pickers</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-kos>)</span><span class=pl-kos>{</span> <span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-en>destroy</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>off</span><span class=pl-kos>(</span><span class=pl-s>&#39;changeDate&#39;</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>dateUpdated</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>delete</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>remove</span>: <span class=pl-en>alias</span><span class=pl-kos>(</span><span class=pl-s>&#39;destroy&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>opts_from_el</span><span class=pl-kos>(</span><span class=pl-s1>el</span><span class=pl-kos>,</span> <span class=pl-s1>prefix</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// Derive options from element data-attrs</span></td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>el</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>out</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>inkey</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>replace</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>RegExp</span><span class=pl-kos>(</span><span class=pl-s>&#39;^&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>prefix</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;([A-Z])&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>prefix</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>RegExp</span><span class=pl-kos>(</span><span class=pl-s>&#39;^&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>prefix</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>function</span> <span class=pl-en>re_lower</span><span class=pl-kos>(</span><span class=pl-s1>_</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>key</span> <span class=pl-k>in</span> <span class=pl-s1>data</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>prefix</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span><span class=pl-s1>key</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>inkey</span> <span class=pl-c1>=</span> <span class=pl-s1>key</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-s1>replace</span><span class=pl-kos>,</span> <span class=pl-s1>re_lower</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>out</span><span class=pl-kos>[</span><span class=pl-s1>inkey</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>out</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>opts_from_locale</span><span class=pl-kos>(</span><span class=pl-s1>lang</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// Derive options from locale plugins</span></td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>out</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// Check if &quot;de-DE&quot; style date is available, if not language should</span></td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// fallback to 2 letter code eg &quot;de&quot;</span></td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>lang</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>lang</span> <span class=pl-c1>=</span> <span class=pl-s1>lang</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>lang</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>d</span> <span class=pl-c1>=</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>lang</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-s1>locale_opts</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-s1>k</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>k</span> <span class=pl-k>in</span> <span class=pl-s1>d</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>out</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>out</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>old</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-en>datepickerPlugin</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>option</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>args</span> <span class=pl-c1>=</span> <span class=pl-v>Array</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span>null<span class=pl-kos>,</span> <span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>args</span><span class=pl-kos>.</span><span class=pl-en>shift</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>internal_return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>$this</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>$this</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>options</span> <span class=pl-c1>=</span> <span class=pl-k>typeof</span> <span class=pl-s1>option</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;object&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>option</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>elopts</span> <span class=pl-c1>=</span> <span class=pl-en>opts_from_el</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-s>&#39;date&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// Preliminary otions</span></td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xopts</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>defaults</span><span class=pl-kos>,</span> <span class=pl-s1>elopts</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>locopts</span> <span class=pl-c1>=</span> <span class=pl-en>opts_from_locale</span><span class=pl-kos>(</span><span class=pl-s1>xopts</span><span class=pl-kos>.</span><span class=pl-c1>language</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// Options priority: js args, data-attrs, locales, defaults</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>opts</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>defaults</span><span class=pl-kos>,</span> <span class=pl-s1>locopts</span><span class=pl-kos>,</span> <span class=pl-s1>elopts</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$this</span><span class=pl-kos>.</span><span class=pl-en>hasClass</span><span class=pl-kos>(</span><span class=pl-s>&#39;input-daterange&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s1>opts</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-s1>opts</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>inputs</span>: <span class=pl-s1>opts</span><span class=pl-kos>.</span><span class=pl-c1>inputs</span> <span class=pl-c1>||</span> <span class=pl-s1>$this</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s>&#39;input&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toArray</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>DateRangePicker</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-s1>opts</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Datepicker</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-s1>opts</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>$this</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>option</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>typeof</span> <span class=pl-s1>data</span><span class=pl-kos>[</span><span class=pl-s1>option</span><span class=pl-kos>]</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;function&#39;</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>internal_return</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>[</span><span class=pl-s1>option</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>args</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>internal_return</span> <span class=pl-c1>===</span> undefined <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>internal_return</span> <span class=pl-k>instanceof</span> <span class=pl-v>Datepicker</span> <span class=pl-c1>||</span></td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>internal_return</span> <span class=pl-k>instanceof</span> <span class=pl-v>DateRangePicker</span></td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>Error</span><span class=pl-kos>(</span><span class=pl-s>&#39;Using only allowed for the collection of a single element (&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>option</span> <span class=pl-c1>+</span> <span class=pl-s>&#39; function)&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>else</span></td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>internal_return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span> <span class=pl-c1>=</span> <span class=pl-en>datepickerPlugin</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>defaults</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-c1>defaults</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>assumeNearbyYear</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>autoclose</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>beforeShowDay</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>beforeShowMonth</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>beforeShowYear</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>beforeShowDecade</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>beforeShowCentury</span>: <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>noop</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>calendarWeeks</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>clearBtn</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>toggleActive</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>daysOfWeekDisabled</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>daysOfWeekHighlighted</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>datesDisabled</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>endDate</span>: <span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>forceParse</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>format</span>: <span class=pl-s>&#39;mm/dd/yyyy&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>isInline</span>: null<span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>keepEmptyValues</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>keyboardNavigation</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>language</span>: <span class=pl-s>&#39;en&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>minViewMode</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>maxViewMode</span>: <span class=pl-c1>4</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>multidate</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>multidateSeparator</span>: <span class=pl-s>&#39;,&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>orientation</span>: <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>rtl</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>startDate</span>: <span class=pl-c1>-</span><span class=pl-v>Infinity</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>startView</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>todayBtn</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>todayHighlight</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>updateViewDate</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>weekStart</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>disableTouchKeyboard</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>enableOnReadonly</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>showOnFocus</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>zIndexOffset</span>: <span class=pl-c1>10</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>container</span>: <span class=pl-s>&#39;body&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>immediateUpdates</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>title</span>: <span class=pl-s>&#39;&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>templates</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>leftArrow</span>: <span class=pl-s>&#39;&amp;#x00AB;&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>rightArrow</span>: <span class=pl-s>&#39;&amp;#x00BB;&#39;</span></td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>showWeekDays</span>: <span class=pl-c1>true</span></td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>locale_opts</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-c1>locale_opts</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">		<span class=pl-s>&#39;format&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">		<span class=pl-s>&#39;rtl&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">		<span class=pl-s>&#39;weekStart&#39;</span></td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-c1>Constructor</span> <span class=pl-c1>=</span> <span class=pl-v>Datepicker</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>dates</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-c1>dates</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>en</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>days</span>: <span class=pl-kos>[</span><span class=pl-s>&quot;Sunday&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Monday&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Tuesday&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Wednesday&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Thursday&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Friday&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Saturday&quot;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>daysShort</span>: <span class=pl-kos>[</span><span class=pl-s>&quot;Sun&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Mon&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Tue&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Wed&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Thu&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Fri&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Sat&quot;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>daysMin</span>: <span class=pl-kos>[</span><span class=pl-s>&quot;Su&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Mo&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Tu&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;We&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Th&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Fr&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Sa&quot;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>months</span>: <span class=pl-kos>[</span><span class=pl-s>&quot;January&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;February&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;March&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;April&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;May&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;June&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;July&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;August&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;September&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;October&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;November&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;December&quot;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>monthsShort</span>: <span class=pl-kos>[</span><span class=pl-s>&quot;Jan&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Feb&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Mar&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Apr&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;May&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Jun&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Jul&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Aug&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Sep&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Oct&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Nov&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;Dec&quot;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>today</span>: <span class=pl-s>&quot;Today&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>clear</span>: <span class=pl-s>&quot;Clear&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">			<span class=pl-c1>titleFormat</span>: <span class=pl-s>&quot;MM yyyy&quot;</span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-v>DPGlobal</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>viewModes</span>: <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>names</span>: <span class=pl-kos>[</span><span class=pl-s>&#39;days&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;month&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>clsName</span>: <span class=pl-s>&#39;days&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>e</span>: <span class=pl-s>&#39;changeMonth&#39;</span></td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>names</span>: <span class=pl-kos>[</span><span class=pl-s>&#39;months&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;year&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>clsName</span>: <span class=pl-s>&#39;months&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>e</span>: <span class=pl-s>&#39;changeYear&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>navStep</span>: <span class=pl-c1>1</span></td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>names</span>: <span class=pl-kos>[</span><span class=pl-s>&#39;years&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;decade&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>clsName</span>: <span class=pl-s>&#39;years&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>e</span>: <span class=pl-s>&#39;changeDecade&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>navStep</span>: <span class=pl-c1>10</span></td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>names</span>: <span class=pl-kos>[</span><span class=pl-s>&#39;decades&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;century&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>clsName</span>: <span class=pl-s>&#39;decades&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>e</span>: <span class=pl-s>&#39;changeCentury&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>navStep</span>: <span class=pl-c1>100</span></td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>names</span>: <span class=pl-kos>[</span><span class=pl-s>&#39;centuries&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;millennium&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>clsName</span>: <span class=pl-s>&#39;centuries&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>e</span>: <span class=pl-s>&#39;changeMillennium&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>navStep</span>: <span class=pl-c1>1000</span></td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>validParts</span>: <span class=pl-pds>/dd?<span class=pl-c1>|</span>DD?<span class=pl-c1>|</span>mm?<span class=pl-c1>|</span>MM?<span class=pl-c1>|</span>yy<span class=pl-kos>(?:</span>yy<span class=pl-kos>)</span>?/g</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>nonpunctuation</span>: <span class=pl-pds>/<span class=pl-kos>[</span>^ -<span class=pl-cce>\/</span>:-@<span class=pl-cce>\u</span>5e74<span class=pl-cce>\u</span>6708<span class=pl-cce>\u</span>65e5<span class=pl-cce>\[</span>-`{-~<span class=pl-cce>\t</span><span class=pl-cce>\n</span><span class=pl-cce>\r</span><span class=pl-kos>]</span><span class=pl-c1>+</span>/g</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>parseFormat</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>toValue</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;function&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>typeof</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>toDisplay</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;function&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-s1>format</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">            <span class=pl-c>// IE treats \0 as a string end in inputs (truncating the value),</span></td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// so it&#39;s a bad format delimiter, anyway</span></td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>separators</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>validParts</span><span class=pl-kos>,</span> <span class=pl-s>&#39;\0&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;\0&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>parts</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-en>match</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>validParts</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>separators</span> <span class=pl-c1>||</span> !<span class=pl-s1>separators</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>||</span> !<span class=pl-s1>parts</span> <span class=pl-c1>||</span> <span class=pl-s1>parts</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>Error</span><span class=pl-kos>(</span><span class=pl-s>&quot;Invalid date format.&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-kos>{</span><span class=pl-c1>separators</span>: <span class=pl-s1>separators</span><span class=pl-kos>,</span> <span class=pl-c1>parts</span>: <span class=pl-s1>parts</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>parseDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>language</span><span class=pl-kos>,</span> <span class=pl-s1>assumeNearby</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>date</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span> <span class=pl-k>instanceof</span> <span class=pl-v>Date</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>format</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseFormat</span><span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>toValue</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-en>toValue</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>language</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>fn_map</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>d</span>: <span class=pl-s>&#39;moveDay&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>m</span>: <span class=pl-s>&#39;moveMonth&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>w</span>: <span class=pl-s>&#39;moveWeek&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>y</span>: <span class=pl-s>&#39;moveYear&#39;</span></td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>dateAliases</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>yesterday</span>: <span class=pl-s>&#39;-1d&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>today</span>: <span class=pl-s>&#39;+0d&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">					<span class=pl-c1>tomorrow</span>: <span class=pl-s>&#39;+1d&#39;</span></td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>parts</span><span class=pl-kos>,</span> <span class=pl-s1>part</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>fn</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>date</span> <span class=pl-k>in</span> <span class=pl-s1>dateAliases</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-s1>dateAliases</span><span class=pl-kos>[</span><span class=pl-s1>date</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-cce>^</span><span class=pl-kos>[</span><span class=pl-cce>\-</span>+<span class=pl-kos>]</span><span class=pl-cce>\d</span><span class=pl-c1>+</span><span class=pl-kos>[</span>dmwy<span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-cce>\s</span>,<span class=pl-kos>]</span><span class=pl-c1>+</span><span class=pl-kos>[</span><span class=pl-cce>\-</span>+<span class=pl-kos>]</span><span class=pl-cce>\d</span><span class=pl-c1>+</span><span class=pl-kos>[</span>dmwy<span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-c1>*</span><span class=pl-cce>$</span>/i</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>parts</span> <span class=pl-c1>=</span> <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>match</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-cce>\-</span>+<span class=pl-kos>]</span><span class=pl-cce>\d</span><span class=pl-c1>+</span><span class=pl-kos>)</span><span class=pl-kos>(</span><span class=pl-kos>[</span>dmwy<span class=pl-kos>]</span><span class=pl-kos>)</span>/gi</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>parts</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>part</span> <span class=pl-c1>=</span> <span class=pl-s1>parts</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>match</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-cce>\-</span>+<span class=pl-kos>]</span><span class=pl-cce>\d</span><span class=pl-c1>+</span><span class=pl-kos>)</span><span class=pl-kos>(</span><span class=pl-kos>[</span>dmwy<span class=pl-kos>]</span><span class=pl-kos>)</span>/i</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>dir</span> <span class=pl-c1>=</span> <span class=pl-v>Number</span><span class=pl-kos>(</span><span class=pl-s1>part</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>fn</span> <span class=pl-c1>=</span> <span class=pl-s1>fn_map</span><span class=pl-kos>[</span><span class=pl-s1>part</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-v>Datepicker</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>[</span><span class=pl-s1>fn</span><span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>dir</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-v>Datepicker</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>_zero_utc_time</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>parts</span> <span class=pl-c1>=</span> <span class=pl-s1>date</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>match</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>nonpunctuation</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>function</span> <span class=pl-en>applyNearbyYear</span><span class=pl-kos>(</span><span class=pl-s1>year</span><span class=pl-kos>,</span> <span class=pl-s1>threshold</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>threshold</span> <span class=pl-c1>===</span> <span class=pl-c1>true</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>threshold</span> <span class=pl-c1>=</span> <span class=pl-c1>10</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// if year is 2 digits or less, than the user most likely is trying to get a recent century</span></td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>year</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>100</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>year</span> <span class=pl-c1>+=</span> <span class=pl-c1>2000</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// if the new year is more than threshold years in advance, use last century</span></td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>year</span> <span class=pl-c1>&gt;</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>+</span><span class=pl-s1>threshold</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>year</span> <span class=pl-c1>-=</span> <span class=pl-c1>100</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>year</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>parsed</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>setters_order</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;yyyy&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;yy&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;M&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;MM&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;m&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;mm&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;dd&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>setters_map</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>yyyy</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-s1>v</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>setUTCFullYear</span><span class=pl-kos>(</span><span class=pl-s1>assumeNearby</span> ? <span class=pl-en>applyNearbyYear</span><span class=pl-kos>(</span><span class=pl-s1>v</span><span class=pl-kos>,</span> <span class=pl-s1>assumeNearby</span><span class=pl-kos>)</span> : <span class=pl-s1>v</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>m</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-s1>v</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>v</span> <span class=pl-c1>-=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>v</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-s1>v</span> <span class=pl-c1>+=</span> <span class=pl-c1>12</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>v</span> %= <span class=pl-c1>12</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>setUTCMonth</span><span class=pl-kos>(</span><span class=pl-s1>v</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>while</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> !== <span class=pl-s1>v</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>d</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-s1>v</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>setUTCDate</span><span class=pl-kos>(</span><span class=pl-s1>v</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>val</span><span class=pl-kos>,</span> <span class=pl-s1>filtered</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;yy&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;yyyy&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;M&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;MM&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;mm&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;m&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;dd&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s>&#39;d&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-v>UTCToday</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>fparts</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>parts</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Remove noop parts</span></td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>parts</span><span class=pl-kos>.</span><span class=pl-c1>length</span> !== <span class=pl-s1>fparts</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>fparts</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>fparts</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-s1>p</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-kos>,</span> <span class=pl-s1>setters_order</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toArray</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// Process remainder</span></td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>function</span> <span class=pl-en>match_part</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>m</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>parts</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>p</span> <span class=pl-c1>=</span> <span class=pl-s1>parts</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>m</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>m</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>parts</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-s1>fparts</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>cnt</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>cnt</span> <span class=pl-c1>=</span> <span class=pl-s1>fparts</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>cnt</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>val</span> <span class=pl-c1>=</span> <span class=pl-en>parseInt</span><span class=pl-kos>(</span><span class=pl-s1>parts</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-c1>10</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>part</span> <span class=pl-c1>=</span> <span class=pl-s1>fparts</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>val</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>switch</span> <span class=pl-kos>(</span><span class=pl-s1>part</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>case</span> <span class=pl-s>&#39;MM&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>filtered</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>months</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-s1>match_part</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>val</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>filtered</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>months</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>case</span> <span class=pl-s>&#39;M&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>filtered</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>monthsShort</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-s1>match_part</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>val</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>inArray</span><span class=pl-kos>(</span><span class=pl-s1>filtered</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>monthsShort</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>parsed</span><span class=pl-kos>[</span><span class=pl-s1>part</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>val</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>_date</span><span class=pl-kos>,</span> <span class=pl-s1>s</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>setters_order</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>s</span> <span class=pl-c1>=</span> <span class=pl-s1>setters_order</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>s</span> <span class=pl-k>in</span> <span class=pl-s1>parsed</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>parsed</span><span class=pl-kos>[</span><span class=pl-s1>s</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>_date</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>setters_map</span><span class=pl-kos>[</span><span class=pl-s1>s</span><span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-s1>_date</span><span class=pl-kos>,</span> <span class=pl-s1>parsed</span><span class=pl-kos>[</span><span class=pl-s1>s</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-s1>_date</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-s1>_date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>date</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>formatDate</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>language</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>date</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>format</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>format</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-en>parseFormat</span><span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>toDisplay</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-en>toDisplay</span><span class=pl-kos>(</span><span class=pl-s1>date</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>,</span> <span class=pl-s1>language</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>var</span> <span class=pl-s1>val</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>d</span>: <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDate</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>D</span>: <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>daysShort</span><span class=pl-kos>[</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>DD</span>: <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>days</span><span class=pl-kos>[</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCDay</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>m</span>: <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>M</span>: <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>monthsShort</span><span class=pl-kos>[</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>MM</span>: <span class=pl-s1>dates</span><span class=pl-kos>[</span><span class=pl-s1>language</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>months</span><span class=pl-kos>[</span><span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCMonth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>yy</span>: <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toString</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>substring</span><span class=pl-kos>(</span><span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code blob-code-inner js-file-line">				<span class=pl-c1>yyyy</span>: <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>getUTCFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>val</span><span class=pl-kos>.</span><span class=pl-c1>dd</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>val</span><span class=pl-kos>.</span><span class=pl-c1>d</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>10</span> ? <span class=pl-s>&#39;0&#39;</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>val</span><span class=pl-kos>.</span><span class=pl-c1>d</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>val</span><span class=pl-kos>.</span><span class=pl-c1>mm</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>val</span><span class=pl-kos>.</span><span class=pl-c1>m</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>10</span> ? <span class=pl-s>&#39;0&#39;</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>val</span><span class=pl-kos>.</span><span class=pl-c1>m</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>seps</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>separators</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>cnt</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>parts</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> &lt;= <span class=pl-s1>cnt</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>seps</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>seps</span><span class=pl-kos>.</span><span class=pl-en>shift</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>val</span><span class=pl-kos>[</span><span class=pl-s1>format</span><span class=pl-kos>.</span><span class=pl-c1>parts</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-s1>date</span><span class=pl-kos>.</span><span class=pl-en>join</span><span class=pl-kos>(</span><span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>headTemplate</span>: <span class=pl-s>&#39;&lt;thead&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code blob-code-inner js-file-line">			              <span class=pl-s>&#39;&lt;tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code blob-code-inner js-file-line">			                <span class=pl-s>&#39;&lt;th colspan=&quot;7&quot; class=&quot;datepicker-title&quot;&gt;&lt;/th&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code blob-code-inner js-file-line">			              <span class=pl-s>&#39;&lt;/tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;th class=&quot;prev&quot;&gt;&#39;</span><span class=pl-c1>+</span><span class=pl-s1>defaults</span><span class=pl-kos>.</span><span class=pl-c1>templates</span><span class=pl-kos>.</span><span class=pl-c1>leftArrow</span><span class=pl-c1>+</span><span class=pl-s>&#39;&lt;/th&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;th colspan=&quot;5&quot; class=&quot;datepicker-switch&quot;&gt;&lt;/th&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;th class=&quot;next&quot;&gt;&#39;</span><span class=pl-c1>+</span><span class=pl-s1>defaults</span><span class=pl-kos>.</span><span class=pl-c1>templates</span><span class=pl-kos>.</span><span class=pl-c1>rightArrow</span><span class=pl-c1>+</span><span class=pl-s>&#39;&lt;/th&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code blob-code-inner js-file-line">						<span class=pl-s>&#39;&lt;/thead&gt;&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>contTemplate</span>: <span class=pl-s>&#39;&lt;tbody&gt;&lt;tr&gt;&lt;td colspan=&quot;7&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>footTemplate</span>: <span class=pl-s>&#39;&lt;tfoot&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;th colspan=&quot;7&quot; class=&quot;today&quot;&gt;&lt;/th&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;th colspan=&quot;7&quot; class=&quot;clear&quot;&gt;&lt;/th&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/tr&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code blob-code-inner js-file-line">						<span class=pl-s>&#39;&lt;/tfoot&gt;&#39;</span></td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>template</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&lt;div class=&quot;datepicker&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;div class=&quot;datepicker-days&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;table class=&quot;table-condensed&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>headTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code blob-code-inner js-file-line">									<span class=pl-s>&#39;&lt;tbody&gt;&lt;/tbody&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>footTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;/table&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/div&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;div class=&quot;datepicker-months&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;table class=&quot;table-condensed&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>headTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>contTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>footTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;/table&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/div&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;div class=&quot;datepicker-years&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;table class=&quot;table-condensed&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>headTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>contTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>footTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;/table&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/div&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;div class=&quot;datepicker-decades&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;table class=&quot;table-condensed&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>headTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>contTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>footTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;/table&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/div&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;div class=&quot;datepicker-centuries&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;table class=&quot;table-condensed&quot;&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>headTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>contTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code blob-code-inner js-file-line">									<span class=pl-v>DPGlobal</span><span class=pl-kos>.</span><span class=pl-c1>footTemplate</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code blob-code-inner js-file-line">								<span class=pl-s>&#39;&lt;/table&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code blob-code-inner js-file-line">							<span class=pl-s>&#39;&lt;/div&gt;&#39;</span><span class=pl-c1>+</span></td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code blob-code-inner js-file-line">						<span class=pl-s>&#39;&lt;/div&gt;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-c1>DPGlobal</span> <span class=pl-c1>=</span> <span class=pl-v>DPGlobal</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/* DATEPICKER NO CONFLICT</span></td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	* =================== */</span></td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-en>noConflict</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span> <span class=pl-c1>=</span> <span class=pl-s1>old</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/* DATEPICKER VERSION</span></td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * =================== */</span></td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-c1>version</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;1.9.0&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>.</span><span class=pl-c1>datepicker</span><span class=pl-kos>.</span><span class=pl-en>deprecated</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>msg</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>console</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>console</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>console</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>console</span><span class=pl-kos>.</span><span class=pl-c1>warn</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s>&#39;DEPRECATED: &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>msg</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/* DATEPICKER DATA-API</span></td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	* ================== */</span></td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code blob-code-inner js-file-line">		<span class=pl-s>&#39;focus.datepicker.data-api click.datepicker.data-api&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code blob-code-inner js-file-line">		<span class=pl-s>&#39;[data-provide=&quot;datepicker&quot;]&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>$this</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>$this</span><span class=pl-kos>.</span><span class=pl-en>data</span><span class=pl-kos>(</span><span class=pl-s>&#39;datepicker&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// component click requires us to explicitly show it</span></td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>datepickerPlugin</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>$this</span><span class=pl-kos>,</span> <span class=pl-s>&#39;show&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>datepickerPlugin</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>$</span><span class=pl-kos>(</span><span class=pl-s>&#39;[data-provide=&quot;datepicker-inline&quot;]&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/uxsolutions/bootstrap-datepicker/blame/491ece3ea1d3e3e06b0e6e62b0aeec5d9278a6c6/js/bootstrap-datepicker.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/uxsolutions/bootstrap-datepicker/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-o4vS4IKrjdy/HD+xr2+VhO6DxQmj5jikhHbEGrd8+JGhpmIOxRrpT1Qo5k3IhKimm8VXIu3pyYejLtOAkm+OsQ==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-a38bd2e0.js"></script>
    <script crossorigin="anonymous" integrity="sha512-6XqOrpzsRfeWz1MuH9q2GuzW4Ktvt+kA5KbChOp1ZjaoGbRl3tBng8HiA5B/lClMvkkj4h+vVuSwLeh14JzGuA==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-e97a8eae.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-1/6VVx6z9r6uphSoGlmYgbqD5KaY+GVMt1Gqa3DIa0U+3Pv2SWu8Fk1BZ2xPne5upvF8HdEWcGeiUjd2URl+oA==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-d7fe9557.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-IMO6eLl5ZK3m/mxD2t4huVJGcP6FWFmugYFzQVo6smfkVH+Oks686AJxTh8Aa+6BulsBBtoko2yg8ArnPSX6HQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-20c3ba78.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-6eziWDn0t6WxyjKKdXe5yEZk4jxu7yn5iJnQdSTPU/M2txs5J4a2N7PU7edMo7v2gr+NiwG4QpcIngvBwLbsdg==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-e9ece258.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

