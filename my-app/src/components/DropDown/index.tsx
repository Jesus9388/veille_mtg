interface Props {
  setFormat: (format: string) => void;
}

const formatList = [
  "Standard",
  "Modern",
  "Legacy",
  "Vintage",
  "Commander",
  "Pioneer",
  "Brawl",
];

const DropDown = ({ setFormat }: Props) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="formats"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select a format
      </label>
      <select
        id="formats"
        size={5}
        className="w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(event) => {
          setFormat(event.target.value);
        }}
      >
        {formatList.map((format) => {
          return (
            <option key={format} value={format}>
              {format}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
