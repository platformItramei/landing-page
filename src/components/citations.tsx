"use client";

type Citation = {
  text: string;
  source: string;
};

interface CitationsProps {
  citations?: Citation[];
}

export default function Citations({ citations }: CitationsProps) {
  if (!citations || citations.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <h3 className="text-xl font-semibold text-white mb-4">References</h3>
      <ol className="list-decimal list-inside space-y-3">
        {citations.map((citation, index) => (
          <li key={index} className="text-gray-300">
            <span className="text-gray-400">{citation.text}</span>
            <span className="text-gray-500 text-sm ml-2">— {citation.source}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}