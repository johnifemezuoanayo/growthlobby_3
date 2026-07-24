import React from 'react'

function BlogBadge({title, textColor}: {title: string, textColor: string}) {
  return (
    <div className="mb-12 flex bg-brand-primary/40 px-4 mx-auto border-brand-primary text-black rounded-full inline-flex py-2 items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-black"></div>
      <span className="text-sm font-medium text-black ">{title}</span>
    </div>
  );
}

export default BlogBadge