const pageConfig = {
  // Title for your status page
  title: "晴雀堂监造坊",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.verynb.me', label: '晴雀堂' }
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'blog',
      // `name` is used at status page and callback message
      name: '晴雀堂',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://blog.verynb.me',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '晴雀堂主站：晴雀的博客',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://blog.verynb.me',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'umami',
      // `name` is used at status page and callback message
      name: '晴雀堂御膳坊',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://u.verynb.me',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'Umami（鲜味）监控：网站流量数据统计',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://u.verynb.me',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    }
    // Example TCP Monitor
    //{
    //  id: 'test_tcp_monitor',
    //  name: 'Example TCP Monitor',
      // `method` should be `TCP_PING` for tcp monitors
    //  method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
    //  target: '1.2.3.4:22',
    //  tooltip: 'My production server SSH',
    //  statusPageLink: 'https://example.com',
    //  timeout: 5000,
    //},
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
