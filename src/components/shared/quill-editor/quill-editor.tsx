'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import ReactQuill from 'react-quill'
import { QuillEditorProps } from './editor.types'

const modules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ['small', false, 'large', 'huge'] }], // Custom dropdown

      [{ header: 1 }, { header: 2 }], // custom button values
      ['bold', 'italic', 'underline', 'strike'], // Toggled button
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }], // Dropdown with defaults from theme
      [{ script: 'sub' }, { script: 'super' }], // Subscript/superscript

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }], // Outdent/indent
      [{ direction: 'rtl' }], // Text direction
      [{ align: [] }],

      ['clean', 'link', 'image', 'video'],
    ],
  },
}

const QuillEditor = ({ value, onChange, placeholder }: QuillEditorProps) => {
  const editorRef = useRef<ReactQuill>(null)

  const handleImage = useCallback(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.click()

    input.onchange = async () => {
      const { files } = input

      if (!files) {
        toast.error('فایل وجود ندارد!')
        return
      }

      // upload image
    }
  }, [])

  useEffect(() => {
    if (!editorRef.current) return

    const editor = editorRef.current
    const toolbar = editor.getEditor().getModule('toolbar')
    toolbar.addHandler('image', handleImage)
  }, [handleImage])

  return (
    <ReactQuill
      ref={editorRef}
      modules={modules}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      theme='snow'
      className='dark:bg-gray-200 rounded mb-2'
    />
  )
}

export default QuillEditor
