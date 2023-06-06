import dynamic from 'next/dynamic'
import { QuillEditorProps } from './editor.types'

const QuillEditor = dynamic(() => import('./quill-editor'), { ssr: false })

export const Editor = (props: QuillEditorProps) => {
  return <QuillEditor {...props} />
}
