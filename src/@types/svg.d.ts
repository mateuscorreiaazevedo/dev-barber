declare module '*.svg' {
  // biome-ignore lint/correctness/noUnusedImports: <explanation>
  import type React from 'react'
  import type { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
