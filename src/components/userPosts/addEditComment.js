import React from 'react'
import { Textarea } from '../Textarea'
import { PrimaryButton } from '../Common/Buttons'

const AddEditComment = ({
    commentText,
    setCommentText,
    loading2,
    addComment,
    itemId,
    title
}) => {
  return (
    <div className='p-4'>
    <Textarea
      type="text"
      name="body"
      labelClass='block text-black mlabel text-sm mb-1 w-1'
      inputWrapperClass='flex items-center'
      required={true}
      placeholder="Enter Comment"
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      className="shadow my-2 appearance-none  border rounded w-full py-2 px-1 text-black"
    />
        <PrimaryButton
            loading={loading2}
            disabled={loading2}
            title={title}
            type="button"
            className="py-2 px-4 rounded flex items-center gap-1 float-right"
            onClick={() => addComment(itemId)}
        />
    </div>
  )
}

export default AddEditComment