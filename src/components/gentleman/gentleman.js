export function Gentleman() {
  const list = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      id: 2,
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  return (
    <>
      <div class="gentleman__avatar-container">
        <span class="gentleman__initial">F</span>
      </div>
      <li class="gentleman">
        <div class="gentleman__data-container">
          <h2 class="gentleman__name">The Fary</h2>
          <ul class="gentleman__data-list">
            <li class="gentleman__data">
              <span class="gentleman__data-label">Profession:</span>
              Influencer
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Status:</span> RIP
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Twitter:</span> Pending
            </li>
          </ul>
        </div>
        <i class="icon gentleman__icon fas fa-check"></i>
        <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
      </li>
    </>
  );
}
