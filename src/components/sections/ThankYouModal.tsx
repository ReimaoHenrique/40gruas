import { Button } from "../ui/Button";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Obrigado!</h3>
        <p className="text-gray-600">Entraremos em contato em breve.</p>
        <Button
          onClick={onClose}
          variant="primary"
          className="mt-4"
        >
          Ok
        </Button>
      </div>
    </div>
  );
}
