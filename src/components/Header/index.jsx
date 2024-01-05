// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allImages } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticatedStorage = localStorage.getItem("user");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const getFirstLetter = (name) => {
    return name ? name[0].toUpperCase() : "";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwtToken");
    dispatch(logout());
    navigate("/login");
  };

  const openProfile = () => {
    // write logic
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white md:text-2xl text-md font-bold flex">
          <img
            height="40"
            width="40"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAyVBMVEX/RQD/////QQD/PQD/NwD/MwD/LQD//Pr/+ff/KAD/8/D/7un/6eL/9/P///3/1sz/xLf/zcD/qpT/3dX/pZD/49z/0sf/v67/HQD/u6z/moX/jnP/jnj/UQD/l3//TRr/uKT/Wzz/XDT/sqD/QBb/eVz/iWz/Yz//p4z/gWL/bEH+kXD+noH/TiT/VBj/cFD+s5n/hnP/aTb/Ui7+glj/fWj/Zkj/bVf/eE7/Xir/PyT/p5n/raP/Tjz/cWH+mXf/kYP/nJL/RDEFtoUxAAAQa0lEQVR4nM1d53raSBQVU9RRQSCaTRHNEGPssBA7ya6dvP9DrQrYApW5Ehrj82u/LNboaMrtd4TapZBb3VuCERJKAyFMbrst+eJXES77c0m35oJYnscHRGFu6dIVyajOZCWQC+YkDkSE1cRRr0RGcwcPIq6ISkgHiw8DV7sCGdXqe1VNSowP8fpW6dkpSUZrPw2rnJQYHTx8apecnVJkZLs/rH5W3umQYd8udbSVIdP65l1yEgPoIO9b61PIaPdrvlQiOuv74mutMBn7gd8CO6FDHmy+ZAx9jvFnUAmA8Vw3+JFR2xz3fRL+SdAudEwXIeP0hU+kEtIR+g4XMqq14SNZctngTQEZCiajD4aftlviwMOBXjUZc87/PE4HQnOzWjKj8bW4BGzGowrJSI/TqyyxI/D0EWTpQMjIr599ip0DCa8QZQ1ARv9Br8zFZ0N/AI4BNhlzc9UldgTesI8BFhnDXX0JLj6blctSbhhkDNuj12ZxBPVsBhsGGev7F5mXAPi7dQkZa/2FuPhs1vlscsnYD1+Ki88m38bJI2N7X4yLz8bLY5NDxh1fXbwkgcZuGTLO15Av58CbbAsnk0xr9iW5+GxmmY6bLDLaUyXucB4Qn7L8Nhlk6s1r65bZQEKzXoSMPBp+WS4+m+EoXYdOJ+NyMpHZXwhkA+Jh+pGWSkZ/Jpe/eBJEoaIiZjurEFEUkSoK2+Igz6kGQRqZ+pLLvGDvt+n+nu/XmFKSMgLB+6Ztmu5kNmTSwcu0bZNG5p6Lpw9h07d9ZVVz2o35QhDPJ4COLT3cCpLmzinjcyJyDyPj8HGPibPjAIYka4599512Oh+MlE1s5agNlhcY4RTZmSSjc9L6O0kXi2rdz7wpIQSjzuD0fzH1dfw9uW0SZKQBp0O5ky64NcdqLhc/H87/vcc6g9Ag4bFJkLHWfMggMZVLCFk1E59Z+8FaaEnj5pyMznpGWdDvoc0raVodFqcYTRlPxAmHzRkZmZsao9yHHPTBU7NrtjL0kTicLeNNfLXmTBE4JWPYC166shhZVfZWxENv9var7er1XDdlnWmC4MWZh+OUjD7nxQUL0VHa9WUYwoRSYfzfTcNytGxCc6ZfCM9PF9opGYube5wcxMjvo2XhMyLT7X72NrEzNPo+kwxCp2fACRmdn3FJb8Jtor7FzSQUYPrz3/1rWkBpzlYQ8eZkauJkpAm/uAVphJu1tUl8bp8Pmaa4XuuAcxWhSXyZxsm0+Hli0dQK96q5TR2CTpLHNfM0C4BXcVEcIyM1+VnK2AsHlbrT1Dcks+RZ3WTJmRBiMzY1MTIax/grfQ53eb2ZPveIJKR5awF6G4S1VDI9ji5ypRft/5uMTU2GZ0da/Qb4aWkvjYzO04WhRF++tck6oZTlyblUb0BVRCToKWTuuJjKhxFJaLQbbrZij3exE03rwdVdcpcko/F0LJNFKP8lK8cBgMdNR/YPNcPQR7MCMgJ7WoLMHU8HJo38dnLueYnxeNfsdieD/bTQUYTvEmS4eslJpN+qSZEZB8J46gMXPFXR+JzMKF0AVAM07IbSQOeS34Wm7VMyUp/nxOB95LRrdbg8Hs3rJ2RMmIgqiYPj3hhxIrMw42SkBlffMr4J9780V7g8Hg0bUoyMtuTJBU1/hftfXnESZWipxchYEA21/FjraIe2eMWu0daKkfnDUfr7q2wcrWmb2yjkzwcZfcmVDPkvWgUTbiYGiTS7kIz9wjW0RN5CLgbbQ1EW6MU+kpEbXGN+R4+96nGbfySEVnlARuPmYIpGOux/TeT3yfBcO5BxuXn+ooH2kcVh8xGZ0RgLNyIjdfkmk+KDgf/KR2SGQCjQ/nwyKk972Qc+xB74bRkhsJ7VkAyv6FKIQK3vRpoTyNtSFmHsSQjCfhwejjAVFSWILSMvEplmR6TksoLOPARhQaFmWBXLssAvTtaLzVPzt2W7rmtGgQd3t5xtFt56StKDzRdCtAyfjHxf5ZZBVMQvu+bI1TX1NGQha5qm6y2zPekFweacfIBSoPeyT0atLn0J0U7npWG2VFnKjo5JkizrjjV46HSUCicIz1SfTMur5hMhIk5nowIFvWr721ZkBfzhw3stn4x9WwEZf78PZyNwbcgRmt3z91AlHxPd2j6ZCuIYCE/HfadYfdg7n/bs77SCIw6hiU+GGXBnPoZsZ5MLKpJrTvNHBbVspFcTJECA6uO1qeiDxkdGFO/Klu8eYbQmO3qWSuNL22IONDKXBA0cYcK+8Ni9/fnz9rRfHx1giKBd90IqIbTJLjY7mODh1vO2QwyXSHilCTpw/yPqDSxHr0tSXXOs3iL8kBhvJoV3fQb07ubwiRBd75pt1zRd69fNAkoH3eqCDltlRByY6vsWN1SnqRBBnDZbFzZXiEFqNdaK/4ko7duHNA6jrpm/hkBtm+iCA/opXVtngTrZ9Dpz8/K+FyfPdPoYixvnJCFF1m5gwkhxBBtChq5TFlNrAkgaKUrHSsnxM0YihI1iCyOAmknEamcgD1raUHYHsLHFkXDHVjPxsExxfqVoA05peid8Y84gwpPqdnlJSADRjr8J/zDJ0FkVguRC6Jmh3Q8y/wgr1vwhsVtO66oURpfpqEIrgenMJF6RKnZucBbMpM0X4YHxE4EMLurSUxXq7F3zINyy+KLrb/8ARkbaTQwsKkEFXvsLbJlaUDV2uVGKx4WbjPCBU0Feb+TFhUA2R43GxIJr0fWW2QLmBdeqqRvDeeV38TezNtPQctvCNGnVnnvT6dp7dVUYn1YVM7O2IIM5S/FgKuLOtMtU5WR30wm8nYgonWeY7g2pTqzmNHPiPQPIlPUnUnf7rt8iOm4DRjAsZqbSbTVyRt+dyOd3X3kWusO40CBbwOQDsmEfhO8VaACJ7E5Ccj+ATk4FoLhgq+W+icZ4UfRdYPsz2LqZlqi36zTyfj84Nwhpk0nGZNb04RVEa96wTtvHhLUay2hLopWQ5eSBNUS9xzQifa35lX1GkAZjg74kVwDJ6XjRTf5cYZ3/Jju7A7+CLM1bxq5JcTjQduavjZSwo5JWDxeDumS/pm9ptiE+ACXfPFOShwjNbuIjpeSDiM+5A8g7QKRabMO8M+Iid25SnCc0+3CuFyYj9yBRd8UWHFAQkHp5nbluk29HstVTo59CZp79dKN1A3pH0RF0mMZD6MDJPAbuE7OL0hxtR4xS9kz2qlQtD+SnRFgX9Aegr1m8yfT5mYnyXSXnS9ecxNGMSPYyNoH5A+hBh0cByFMmmXr/bB2gjKLMCMn0RppaqhwB2sojiAKA4zMke2ZqzlnfIKWX+dMA+llkFuEcA9AEWphBfKbWhJJ5yjkCLDHOprNk6KaTzskLdt5yfg+dGdKsCbURMKCYS8awt+96M1F6LD1bGtGPT4iUXZ4Ys2HRcIRGQbQZeAKQ3CFr+mAqEhwULe7bAGPL9igJvyIieJD7YBs2M+ghiDbrwDwA8l++Mii1Hjfj/X5uwSIG2mT/9+cUT3/uGd2kgJm9yNMLZGjgH1V7NnW3OWiwmpYZI1gpTZShAc2dgXo2KobUgJVcRLkz0KwmJGQrwhwhD2ALJ8pqgraZQPT3NchoO5DoQFG+WU0H6gDi2+cFAz9gwrJh8SrKBKw3YZuGbK4RDezC1g0NWh4F2bNtWI42Xl/B6yz9Ae1of0NH2bPQmRRwVsMnjmj9AG0ZHNYDhRnnfaAq9/nrDBCVicj0jxnn8gS2zhCC+FErhfYEO8uEybEWAKrLCXT2yRFBw00vuU+Q8d6rNGo67Cz3ba5PPgJUmPXvK8Ef9TO1jMr2BOiGkRJQLzZ1rFVrAhMEceTejchA1xkik9x36z49wRMcJfvPWyOXvLYEalqH7poFqwHxME91tqaUTt+AyrX6a0wpHeT9ZAJMHz+tBjTAdZp0lTP4RgyUpH0DIo7cXdBqHP/NmZqWAFv9aNgwYmRqDjhTs3OXPfpzuCow9SzWZnDmUWU5/puzKodA7wReHRbDgYwBbgSGptmWoXMbrQsielbOS0ruEkceA0KzHeZGH1o8hPryCZmaBa4HxjmRtNZKPBj2yrZvppQEGLKqNVYkchoimqftTaApymh4/Lzv/QD24Bxius/Rau7Gh677WOmg5cR2Wpp6gKY7rjV4UTrR9GG8HWRvLmMC7t6P9sc/eifzCI+y42UOG7O3PYZrsCiSl/1sfhNht/EEeqw0wXT4lDMtkgUT/eGjHhNkNHhJIMK7HDZ1+22MjsIuaC9FaISgrOnwrwRvc2+Zki14ogxeJHto1B4LpNGLuzxhIpnNnZBZ7IMIxT96dp60lLtb+MuQ94mJkdEKtARAeJPrqqnrVm8hdkRyaiYiRMRO5+Wm28oV/NKkABcUa78T6whUpFUTwv/mX9Yh1XWz21950+MiC9bZdL1YNtyWmi+F6vOfBbJkxFjUvXSvJjxl2p1SXdVdazJphJhMLNs/2pgWUWtWpGw4q1eT0ShU4ooIS4U+PDbxH7kYrQvV8yiN2GPj/c2052JJUFTMV3pLQH/uFHoH/Bz/oCed50YFS+kxXVZa2qB2t8XKLJEwyuo8V9OKJtv5Ckl1RSeqvcMFS8bwaf74WbfGwh1bcMebVEJHcwe0aMOAD60sjQzU6RQHIZvfJSsBP1A3b7ziV/ZEDqYsMqX6HCAy3fxxL/APGlr7aVyijVMiF/aMTLnWQIiQ8VO7ZPGZbDZ2wzKFtO+NgLLI1DSYOzQBjNc/BqzLblKgPc7HxdqZvYP8OJdziX7NdtnmQAjjn/8u7ZxmsueQtcfV32nZDgFomzAhkm3B7y6oZcVUHM4aWc1k45Acq7fCl9TRo6QzIklGLagHJPnQ9Wo+ctS6LEuSEV95hiFJcl3V3Lt/Fphe1hEAPye1j5Tu88kUyqIIUq87ivB92ewGvRrMEK7r2t3J4J8X0ul0Lr7vGU1T7MO0ewEalbQ69Y3MMJ3ef9gwgH9G0LAwuoqnI5yWnpt6YwO7qK7AsGHFdYgKe4Hgb9AbG2o6IL3zqqBL8F0aoMTbawKv0xON08lIbWB20FWAHjIieBk3A3HuEnYRDv2/4GRqdWDM6grIThbNvE2Lc9Oz8ohamRUj81XvBsu5GSzvBjoT7kv/PKB9TsVE3t2A5le5F/QDeJV332nurY3mC9eWlMVBXnLvbs2/T9N9+VJzg1/ykxEZN51+mRtoA+AVI7GSdaGuufoyahrN3S8QMgXi0JzxHlO+gMxXkTd58gVOpqY9cbyXAgiEM++dLEamJt1xuvcQDDy8gzh9YLfQt4sFTaoGWcOy9kBkajVrz7elax4QYpULFCRTc17RlZYaRq/QIgQomZrWhOblVAsybIIz2MBkanV7xuVqylwgMrPh8QU4GV/i3H+2LY2E+yLZx0XI1GR7XTwidAEVurYLhUwLkfHp3AOz8yoAFu4LRn8Lkgk0T/QZp7Q/CFOvvJxMTWss+G8dJCwaxRuRFSdTq+n3K750kLC6LxNULEOmJpu9NeG12BAi6165XIlSZIIEhN4Ll2t+BIxf8pPRqifj03EHJSL3LAR9VN3SCTmlyfh0nOaDUqWpg7Dy0HQuyC26gEwQLm6vhKp0HESEVTu1i+bnkPGhmvfVuKPwy715acLX/5CLG6zuRvJMAAAAAElFTkSuQmCC"
            alt=""
          />
          <span className="ml-2">raddit</span>
        </Link>
        {user || isAuthenticatedStorage ? (
          <div className="flex justify-center items-center relative">
            <p className="ml-2 text-white mr-2 hidden sm:inline">
              Welcome,{user?.first_name}
            </p>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer rounded-full w-8 h-8 bg-white shadow-sm flex items-center justify-center text-blue-800 text-xl font-bold ml-3"
            >
              {user !== null && getFirstLetter(user?.first_name)}{" "}
            </div>
            {isDropdownOpen && (
              <div className="absolute top-12 right-0 bg-white border rounded shadow-md w-48 z-50">
                <ul>
                  <li
                    className="p-4 pl-6 cursor-pointer flex gap-4 text-lg items-center"
                    onClick={openProfile}
                  >
                    <img
                      alt="profile"
                      src={allImages.userProfile}
                      className="w-6 h-6"
                    ></img>
                    Profile
                  </li>
                  <li
                    className=" p-4 pl-6 flex gap-4 text-lg cursor-pointer border-b border-gray-100 items-center"
                    onClick={handleLogout}
                  >
                    <img
                      alt="logout"
                      src={allImages.logOut}
                      className="w-5 h-5"
                    ></img>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            <nav className="space-x-4">
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Register
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
