import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/navigation'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
      <header>
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Bubble list</a>
      <a href="/makebubble">Bubble Maker </a>
      <a href="/blogedit">Bubble Editor</a>
      <a href="/protectedpage">Profile </a>
      <a href="/yourblogs">Your bubbles</a>
      </nav>  
  </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
