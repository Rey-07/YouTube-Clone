export function VideoCard() {
  return (
    <div>
      <img src="/photo.jpg"></img>
      <div className="grid grid-cols-12 pb-2">
        <div className="col-span-1">
          <img className="rounded-full w-20 h-20" src="/photo.jpg"></img>
        </div>

        <div className="col-span-11 pl-5">
          <div>Jawan: Chaleya [Hindi] | Shahrukh Khan</div>
          <div className="col-span-11 pl-0 text-gray-400">Harkirat Singh</div>
          <div className="col-span-11 pl-0 text-gray-400">
            48M+ | 13 Days Ago
          </div>
        </div>
      </div>
    </div>
  );
}
