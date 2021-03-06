export const createKitchen = () => {
  const k = document.createElement("a-entity");

  const plate = (w, h, d) => {
    const box = document.createElement("a-box");
    box.setAttribute("width", w);
    box.setAttribute("height", h);
    box.setAttribute("depth", d);
    box.setAttribute("color", "gray")
    k.appendChild(box);
    return box;
  };
  const pos = (p, x, y, z, thx = 0, thy = 0, thz = 0, color = "#ddd") => {
    p.setAttribute("position", { x, y, z });
    //p.setAttribute("rotation", { x: th });
    p.setAttribute("rotation", { x: thx, y: thy, z: thz });
    p.setAttribute("color", color);
    return p;
  };
  const room = (x, y, w, h) => {
    const d = .025;
    pos(plate(w, h, d), 0, 0, 0, 90, 90, 0, "#444"); // 床
    pos(plate(w, h, d), 0, 2.6, 0, 90, 90, 0); // 天井
    pos(plate(2.6, h, d), 0, 1.3, -w / 2, 0, -180, 90); // 奥の壁
    pos(plate(2.6, w, d), h / 2, 1.3, 0, 0, -90, 90); // 右壁
    pos(plate(2.6, w, d), -h / 2, 1.3, 0, 0, -90, 90); // 左壁
    pos(plate(.65, h - .75, d), -.75 / 2, .9, -w / 2 + .65 / 2, 90, 90, 0, "white"); // キッチン天板
    pos(plate(.90, h - .75, d), -.75 / 2, .9 / 2, -w / 2 + .65, 0, -180, 90, 0, "white"); // キッチンのドア
    pos(plate(.7, .7, 1.85), h / 2 - .75 / 2, 1.85 / 2, -w / 2 + .7 / 2, 90, 90, 0, "white"); // 冷蔵庫
    pos(plate(.50, .65, d), -h / 2 + .65 / 2 + .393, .9 + .01, -w / 2 + .65 / 2, 90, 90, 0, "gray"); // IH
    pos(plate(.50, .81, d), -h / 2 + .81 / 2 + .393 + .65 + 1.038, .9 + .01, -w / 2 + .65 / 2, 90, 90, 0, "gray"); // シンク
    pos(plate(.50, .75, .5), -h / 2 + .75 / 2 + .393, .9 + .95 + .25, -w / 2 + .65 / 2, 90, 90, 0, "white"); // 換気扇

    pos(plate(.8, 3.8, .9), -1.10 / 2, .9 / 2, .8 / 2, 90, 90, 0, "#a85"); // カウンター天板

    //wallX(0, -h, w, 0);
    /*
    wallX(0, -h, w, 0);
    wallY(0, 0, h, 0);
    wallY(-w, 0, h, 0);
    */
  };
  const w = 3.500;
  const h = 4.886;
  room(0, 0, w, h);
  return k;
};
