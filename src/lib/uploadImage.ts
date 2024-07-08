// import {getFiles, postFile} from '../api/files'
// import axios from 'axios'
//
// export const uploadImage = async (
//   file: File | string,
//   kind?: string,
//   onProgress?: (event: {percent: number}) => void
// ) => {
//   if (typeof file === 'string') return file
//
//   const res = await getFiles({type: 'image', mimeType: file.type})
//   const data = res.data
//
//   await axios.put(data.url, file, {
//     headers: {'Content-Type': file.type},
//     onUploadProgress(progressEvent) {
//       const percentCompleted = Math.round(progressEvent.loaded * 100)
//       if (onProgress) onProgress({percent: percentCompleted})
//     }
//   })
//
//   const {
//     data: {url}
//   } = await postFile({type: 'image', kind: kind || 'products', path: data.path})
//
//   return url
// }
export {}