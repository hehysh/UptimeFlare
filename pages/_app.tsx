import '@mantine/core/styles.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import NoSsr from '@/components/NoSsr'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <MantineProvider defaultColorScheme="auto">
        <Component {...pageProps} />
        {/* 添加全局样式 */}
        <style jsx global>{`
          body {
            font-family: "LXGW WenKai", sans-serif;
          }
        `}</style>
      </MantineProvider>
    </NoSsr>
  )
}