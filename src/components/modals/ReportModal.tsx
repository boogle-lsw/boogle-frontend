import { useState } from 'react';
import Button from '@/components/common/Button';

interface ReportModalProps {
  cafeName: string;
  onClose: () => void;
}

export default function ReportModal({ cafeName, onClose }: ReportModalProps) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) {
      alert('신고 내용을 입력해주세요.');
      return;
    }
    alert('신고가 접수되었습니다. 검토 후 반영하겠습니다.');
    onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-white px-5 pt-5 pb-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 ml-2">
          <p className="mb-1 text-[11px] font-semibold tracking-widest text-[#8B7368]">
            정보 수정 제안
          </p>

          <h2 className="text-lg font-bold text-gray-900">수정이 필요한 내용이 있나요?</h2>
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`${cafeName} 의 잘못된 정보나 수정이 필요한 내용을 알려주세요.`}
          rows={5}
          className="w-full resize-none rounded-2xl border border-[#E8DDD7] bg-[#FDFAF8] px-4 py-3 text-sm leading-relaxed text-gray-700 placeholder:text-gray-300 transition focus:border-[#8B7368] focus:outline-none"
        />

        <div className="mt-4 flex gap-2">
          <Button variant="brown1" size="full" textColor="brown" onClick={onClose}>
            취소
          </Button>

          <Button
            variant="brown4"
            size="full"
            textColor="white"
            onClick={handleSubmit}
            disabled={!content.trim()}
          >
            제출하기
          </Button>
        </div>
      </div>
    </div>
  );
}
