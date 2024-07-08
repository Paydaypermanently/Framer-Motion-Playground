import {Upload as AntdUpload, Modal, Image, FormInstance} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import React, {useCallback, useEffect, useState} from 'react'
import {UploadFile} from 'antd/es/upload/interface'

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{marginTop: 8}}>업로드</div>
  </div>
)

const Upload = ({
  title,
  max,
  values,
  basePath,
  onChange,
  form,
  arrname,
  ...props
}: {
  title: string
  max: number
  values?: string[] | string
  basePath?: string
  onChange?: (values: any[]) => void
  form: FormInstance<any>
  arrname?: string | number
  multiple?: boolean
}) => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleCancel = useCallback(() => setPreviewVisible(false), [])

  const handlePreview = useCallback(async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }, [])

  const handleChange = useCallback(
    ({fileList, file}: any) => {
      setFileList(fileList)
      file.status = 'done'
      if (onChange) onChange(fileList.map((item: any) => (item.url ? item.url : item.originFileObj)))

      // if (typeof arrname === 'number') {
      //   const arr = form.getFieldValue('arr')
      //   arr[arrname][title] = ''
      //   form.setFieldsValue({arr})
      // } else
      form.setFieldsValue({[title]: ''})
    },
    [title, form, arrname]
  )

  const customRequest = useCallback(async (options: any) => {
    const {onSuccess} = options

    onSuccess()
  }, [])

  useEffect(() => {
    if (values)
      setFileList(() =>
        Array.isArray(values)
          ? values.map((value, index) => ({
              uid: `-${index}`,
              name: 'image.png',
              status: 'done',
              url: basePath ? basePath + value : value
            }))
          : [{uid: '-1', name: 'image.png', status: 'done', url: basePath ? basePath + values : values}]
      )
  }, [values])

  return (
    <>
      <AntdUpload
        listType="picture-card"
        customRequest={customRequest}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        {...props}
      >
        {fileList.length >= max ? null : uploadButton}
      </AntdUpload>
      <Modal visible={previewVisible} title={title} footer={null} onCancel={handleCancel}>
        <Image src={previewImage} preview={false} width={'100%'} />
      </Modal>
    </>
  )
}

export default Upload
