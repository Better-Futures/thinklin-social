import {  BsBriefcase, BsChatDotsFill, BsFillBookmarkFill, BsFillChatLeftDotsFill, BsQuestionCircle} from "react-icons/bs";
import {IoIosNotifications} from "react-icons/io"
import { IoMdPerson } from "react-icons/io";
import { CgTag } from "react-icons/cg";
import { MdRssFeed, MdOutlineOndemandVideo, MdEditCalendar, MdPermMedia, MdLocationOn } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaGraduationCap, FaSmileBeam } from "react-icons/fa";
import img1 from '../Images/Clifw.jpg';
import img2 from '../Images/Paul_Biya.png';
import img3 from '../Images/Putin1.jpg';
import img4 from '../Images/Xi.jpg';
import img5 from '../Images/Assimi-Goita.jpg';
import img01 from '../Images/img1.jpg'
import img02 from '../Images/img2.jpg'
import img03 from '../Images/img3.jpg'
import img04 from '../Images/img4.jpg'
import img05 from '../Images/img5.jpg'



export const TopbarItems =[
    {
        icon: <IoMdPerson/>,
        number: 1,
    },
    {
        icon: <BsChatDotsFill/>,
        number: 2,
    },
    {
        icon: <IoIosNotifications/>,
        number: 3,
    },
];

export const SidebarItems = [
    {
        Icon: <MdRssFeed/>,
        Icontext: 'Feed'
    },
    {
        Icon: <BsFillChatLeftDotsFill />,
        Icontext: 'Chats'
    },
    {
        Icon: <MdOutlineOndemandVideo/>,
        Icontext: 'Video'
    },
    {
        Icon: <HiUserGroup/>,
        Icontext: 'Group'
    },
    {
        Icon: <BsFillBookmarkFill/>,
        Icontext: 'Bookmark'
    },
    {
        Icon: <BsQuestionCircle/>,
        Icontext: 'Question'
    },
    {
        Icon: <BsBriefcase/>,
        Icontext: 'Jobs'
    },
    {
        Icon: <MdEditCalendar/>,
        Icontext: 'Events'
    },
    {
        Icon: <FaGraduationCap/>,
        Icontext: 'Courses'
    }
];

export const SidebarFriend = [
    {
        image: img1,
        name: 'Chofor Cliford'
    },
    {
        image: img2,
        name: 'Paul Biya'
    },
    {
        image: img3,
        name: 'Vladimir Putin'
    },
    {
        image: img4,
        name: 'Xi Jinping'
    },
    {
        image: img5,
        name: 'Assimi Goita'
    },
];

export const ShareOptionMethod = [
    {
        icon: <MdPermMedia/>,
        text: 'Photo or Video',
        color: 'tomato'
    },
    {
        icon: <CgTag/>,
        text: 'Tag',
        color: 'blue'
    },
    {
        icon: <MdLocationOn/>,
        text: 'Location',
        color: 'green'
    },
    {
        icon: <FaSmileBeam/>,
        text: 'Feelings',
        color: 'goldenrod'
    }
];

export const PostInfo = [
    {
        image: img1,
        name: 'Chofor Cliford',
        time: '5 mins ago',
        image1: img01,
        text: 'Hey this is my first post:)',
        like: 32,
        comment: 9
    },
    {
        image: img2,
        name: 'Paul Biya',
        time: '5 hours ago',
        image1: img02,
        text: 'Hey this is my first post:)',
        like: 24,
        comment: 32
    },
    {
        image: img3,
        name: 'Vladimir Putin',
        time: '15 mins ago',
        image1: img03,
        text: 'Hey this is my first post:)',
        like: 12,
        comment: 15
        
    },
    {
        image: img4,
        name: 'Xi Jinping',
        time: '4 secs ago',
        image1: img04,
        text: 'Hey this it is ok.',
        like: 6,
        comment: 4
    },
    {
        image: img5,
        name: 'Assimi Goita',
        time: 'now',
        image1: img05,
        text: 'Hey this is my first post:)',
        like: 1,
        comment: 7
    },
];

export const UserInfo = [
    {
        Key: 'City:',
        Value: 'New York'
    },
    {
        Key: 'From:',
        Value: 'Madrid'
    },
    {
        Key: 'Relationship:',
        Value: 'Single'
    },
]