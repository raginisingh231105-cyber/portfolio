export default function Timeline({ items }: { items: any[] }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10 font-mono border border-dashed border-gray-800 rounded-lg">
        [NO_DATA_FOUND] // Experience module empty
      </div>
    );
  }

  return (
    <div className="relative border-l border-gray-800 ml-4 space-y-8">
      {items.map((item, index) => (
        <div key={index} className="pl-6 relative">
          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-800 rounded-full border border-gray-600 hover:bg-neon-pink hover:border-neon-pink transition-colors duration-300 shadow-[0_0_0_4px_#06070A]" />
          <h3 className="text-lg font-bold text-white">{item.role || "Role"}</h3>
          <span className="text-sm text-neon-purple mb-2 block font-mono">{item.year}</span>
          <p className="text-gray-400 text-sm mb-3">{item.company || item.institution}</p>
          {item.details && Array.isArray(item.details) && item.details.length > 0 && (
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside ml-2">
              {item.details.map((detail: string, i: number) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
