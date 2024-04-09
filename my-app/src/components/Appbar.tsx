import { SearchBar } from "./SearchBar";

export function Appbar() {
  return (
    <div className="flex justify-between pt-1 p-3">
      <div>Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign In</div>
    </div>
  );
}
