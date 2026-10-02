import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

export const alt = 'DevHub for macOS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const icon = await readFile(join(process.cwd(), 'public/images/icon.png'))
  const iconSrc = `data:image/png;base64,${icon.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#131316',
        color: '#ececf0',
        padding: '0 88px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <img
          src={iconSrc}
          width={96}
          height={96}
          alt=""
          style={{ borderRadius: 22 }}
        />
        <div style={{ fontSize: 44, fontWeight: 700 }}>DevHub</div>
      </div>
      <div
        style={{
          marginTop: 44,
          fontSize: 74,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: 980,
        }}
      >
        Keep Homebrew, Node and Ruby up to date from your menu bar.
      </div>
      <div style={{ marginTop: 40, fontSize: 30, color: '#f5821f' }}>
        Free and open source for macOS
      </div>
    </div>,
    size,
  )
}
