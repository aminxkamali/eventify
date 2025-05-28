import HomeHeader from '../components/homePageComponents/HomeHeader';
import DiscoverEventsHeader from '../components/homePageComponents/DiscoverEventsHeader';
import UpcomingEvents from '../components/homePageComponents/UpcomingEvents';
import { Divider } from 'primereact/divider';
import EventsCategory from '../components/homePageComponents/EventsCategory';
import CreateEvent from '../components/homePageComponents/CreateEvent';
import HomeFooter from '../components/homePageComponents/HomeFooter';
import FriendsList from '../components/homePageComponents/FriendsList';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      <HomeHeader />
      <DiscoverEventsHeader />
      <UpcomingEvents />
      <Divider align="center" type="dashed" className="w-full bg-gray-200 text-gray-200" />
      <EventsCategory />
      <Divider align="center" type="dashed" className="w-full bg-gray-200 text-gray-200" />
      <CreateEvent />
      <Divider align="center" type="dashed" className="w-full bg-gray-200 text-gray-200" />
      <FriendsList />
      <Divider align="center" type="dashed" className="w-full bg-gray-200 text-gray-200" />

      <HomeFooter />
    </div>
  );
}
