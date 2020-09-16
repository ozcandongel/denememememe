.feed {
  flex: 0.4;
  border-right: 1px solid var(--twitter-background);
  min-width: fit-content;
  overflow-y: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.feed::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.feed {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.feed__header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border: 1px solid var(--twitter-background);
  padding: 15px 20px;
}

.feed__header > h2 {
  font-size: 20px;
  font-weight: 800;
}
