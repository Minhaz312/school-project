import React from 'react'

export default function MobileForm() {
  return (
    <div className="mobile-admission-form">
      <input
        type="text"
        className="form-control my-3"
        placeholder="ছাত্র/ছাত্রীর নাম(বাংলায়)"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="ছাত্র/ছাত্রীর নাম(ইংরেজি)"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="পিতার নাম(বাংলায়)"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="পিতার নাম(ইংরেজি)"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="মাতার নাম(বাংলায়)"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="মাতার নাম(ইংরেজি)"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="পিতা/মাতা মৃত হলে অভিবাবকের নাম"
      />
      <input type="text" className="form-control my-3" placeholder="পেশা" />
      <input
        type="text"
        className="form-control my-3"
        placeholder="অভিভাবক হলে সম্পর্ক"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="ফোন/মোবাইল নং"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="বর্তমান ঠিকানা"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="স্থায়ী ঠিকানা"
      />
      <label>ছাত্র/ছাত্রীর জন্ম তারিখ(জন্ম সনদ অনুযায়ী)</label>
      <input type="date" className="form-control my-3" />
      <input type="text" className="form-control my-3" placeholder="উচ্চতা" />
      <input type="text" className="form-control my-3" placeholder="ধর্ম" />
      <input type="text" className="form-control my-3" placeholder="জাতীয়তা" />
      <input
        type="text"
        className="form-control my-3"
        placeholder="পুর্বে কোন বিদ্যালয়ে অধ্যায়ন করলে তার নাম"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="পুর্বে যে শ্রেণীতে অধ্যয়ন করেছিল"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="বর্তমানে যে শ্রেণীতে ভর্তি হতে ইচ্ছুক"
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="আপনার সন্তানের মানসিক ও শারীরিক কোন সমস্যা থাকলে তার বিবরণ"
      />
    </div>
  )
}
