import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworklistSearchFilter() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};
// ------------------------------------------------------------
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);


    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
// ------------------------------------------------------------
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
// ------------------------------------------------------------
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      {/* Judul Halaman */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white hover:text-gray-300 transition-colors">
          Framework List
        </h1>
        <div className="h-1 w-20 bg-gray-500 mx-auto mt-2 rounded hover:w-32 transition-all"></div>
      </div>

      {/* Container Card */}
      <div className="max-w-3xl mx-auto space-y-5">
        <input
              type="text"
              name="searchTerm"
              onChange={handleChange}
              placeholder="Search framework..."
              className="w-full p-2 border border-gray-300 rounded mb-4 text-white"
            />
            <select
              name="selectedTag"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4 text-white"
            >
              <option value="">All Tags</option>
  {allTags.map((tag, index) => (
    <option key={index} value={tag} className="text-black">
      {tag}
    </option>
  ))}
            </select>

            {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-gray-400 hover:bg-gray-800/80 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            {/* Nama Framework */}
            <h2 className="text-xl font-bold text-white mb-2 hover:text-gray-300 transition-colors">
              {item.name}
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors">
              {item.description}
            </p>

            {/* Informasi Developer */}
            <div className="bg-gray-900 rounded-md p-3 mb-2 hover:bg-gray-950 transition-colors">
              <span className="text-gray-500 text-sm">Developer:</span>
              <p className="text-gray-300 hover:text-white transition-colors">
                {item.details.developer}
              </p>
            </div>

            {/* Informasi Tahun Rilis */}
            <div className="bg-gray-900 rounded-md p-3 mb-3 hover:bg-gray-950 transition-colors">
              <span className="text-gray-500 text-sm">Release Year:</span>
              <p className="text-gray-300 hover:text-white transition-colors">
                {item.details.releaseYear}
              </p>
            </div>

            {/* Link Website */}
            <a
              href={item.details.officialWebsite}
              className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 hover:scale-105 transition-all duration-200 mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website →
            </a>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs hover:bg-gray-600 hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
