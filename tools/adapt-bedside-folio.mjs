import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const cards = [
  ['brief','Project Brief and Success Criteria','Show that you understand what the bedside table must achieve.','Project brief, user needs, constraints and a checklist of success criteria.','What must your bedside table do to be considered successful?',['My bedside table must...','I will judge the finished table by...'],'Labelled bedside table showing storage, stability, proportion and safe use.'],
  ['plans','Plans and Design Choices','Explain how the drawings and project information guided your decisions.','Working drawings, cutting list, sketches, annotations and approved changes.','Which design decision had the greatest effect on how your table looks or works?',['I chose this design because...','This decision affected the table by...'],'Annotated plan beside a simple bedside table sketch.'],
  ['whs','Work Health and Safety','Show how you managed workshop risks at each construction stage.','PPE, hazards, controls and safe workshop practice.','What was one important hazard in this project, and how did you control it?',['A hazard during this stage was...','I reduced the risk by...'],'Hazard-and-control diagram with PPE, guards, clamping and clear workspace.'],
  ['timber','Timber Inspection and Preparation','Record how you selected and prepared timber for the required components.','Timber type, cutting list, grain, defects, component labels and datum marks.','How did timber inspection help you avoid problems later?',['Before cutting, I checked the timber for...','I positioned or rejected this piece because...'],'Timber board labelled with grain, defects and usable sections.'],
  ['markout','Measuring, Datums and Mark-Out','Explain how reference faces and edges helped you prepare accurate parts.','Datum faces and edges, marked components, measuring tools and matching-part checks.','How did using a datum improve the accuracy of your mark-out?',['I used the datum as...','This helped the parts match because...'],'Component with datum face, datum edge, dimensions and waste marks.'],
  ['joinery','Legs, Rails and Joinery','Record how the frame joints were marked, cut and checked before glue-up.','Joint preparation, test pieces, dry-fit photos, gaps or misalignment and corrections.','What did the dry fit reveal before you permanently assembled the table?',['During the dry fit, I noticed...','Before assembly, I corrected this by...'],'Mortise-and-tenon joint marked, cut and dry fitted.'],
  ['assembly','Frame Assembly and Squareness','Explain how the frame was assembled accurately and held square.','Glue application, clamps, assembly order, diagonal measurements and squareness checks.','How did you check that the bedside table frame was square during assembly?',['I assembled the frame in this order because...','I checked squareness by...'],'Table frame clamped on a bench with diagonal checks.'],
  ['storage','Drawer, Shelf and Hardware','Show how the drawer or shelf was built and made to work reliably.','Storage components, clearances, hardware layout, pilot holes and movement tests.','What did you check to make sure the drawer or shelf operated correctly?',['I built and fitted the storage by...','I checked the movement by...'],'Drawer box, shelf supports and hardware layout with clearance notes.'],
  ['top','Top Fitting and Timber Movement','Explain how you fitted the top accurately while allowing sensible movement.','Top alignment, overhang checks, fixing method and stability test.','Why does the table top need accurate alignment and an appropriate fixing method?',['I aligned the top by...','This fixing method allows...'],'Top centred on a frame with overhang and fixing points marked.'],
  ['finish','Surface Preparation and Finish','Record how surfaces were prepared and protected.','Sanding stages, defect checks, finish used, application method and drying between coats.','How did surface preparation affect the quality of the final finish?',['I prepared the surface by...','This improved the finish because...'],'Rough, sanded and finished timber surface comparison.'],
  ['problems','Problem Solving and Improvement','Explain a genuine problem, the action you took and what you learned.','Problem, likely cause, solution and result after correction.','What problem required the most useful change to your work?',['The problem occurred when...','I improved the result by...'],'Problem to cause to solution to result flow.'],
  ['evaluation','Final Evaluation and Evidence','Judge the completed table honestly against the project brief and success criteria.','Final photos, stability check, drawer test, strengths, limitations and one realistic improvement.','How successfully does your completed table meet the project brief?',['The strongest part of my table is...','If I completed the project again, I would...'],'Final table, storage test and best construction detail.']
];

const cardSource = `const STORE='bedside_table_folio_v1';\nconst CARDS=${JSON.stringify(cards)}.map((c,i)=>({id:i+1,key:c[0],title:c[1],purpose:c[2],evidence:c[3],prompt:c[4],starters:c[5],visual:c[6]}));`;
const sourceScript = fs.readFileSync(path.join(root, 'scripts', 'folding-chair-folio.js'), 'utf8');
const start = sourceScript.indexOf("const STORE='");
const end = sourceScript.indexOf("\nconst $=id=>", start);
let rewritten = sourceScript.slice(0, start) + cardSource + sourceScript.slice(end);
rewritten = rewritten
  .replaceAll('folding-chair-folio-session.json', 'bedside-table-folio-session.json')
  .replaceAll('folding-chair-folio-backup.zip', 'bedside-table-folio-backup.zip')
  .replaceAll('folding-chair-folio', 'bedside-table-folio')
  .replaceAll('Folding Chair folio', 'Bedside Table folio')
  .replaceAll('Folding Chair Project Folio', 'Bedside Table Project Folio');
fs.writeFileSync(path.join(root, 'scripts', 'bedside-table-folio.js'), rewritten);

let html = fs.readFileSync(path.join(root, 'folding-chair-folio.html'), 'utf8');
html = html
  .replaceAll('Folding Chair', 'Bedside Table')
  .replaceAll('folding-chair-folio', 'bedside-table-folio')
  .replaceAll('chair-folio', 'bedside-folio')
  .replaceAll('chair.', 'table.')
  .replaceAll('chair ', 'table ')
  .replaceAll('chair</', 'table</')
  .replaceAll('chair. ', 'table. ')
  .replace('assets/folio/folding-chair-folio-guide.png', 'assets/folio/bedside-table-folio-guide.png');
fs.writeFileSync(path.join(root, 'bedside-table-folio.html'), html);
fs.copyFileSync(path.join(root, 'styles', 'folding-chair-folio.css'), path.join(root, 'styles', 'bedside-table-folio.css'));
fs.copyFileSync(path.join(root, 'styles', 'folding-chair-folio-infographics.css'), path.join(root, 'styles', 'bedside-table-folio-infographics.css'));
fs.copyFileSync(path.join(root, 'scripts', 'folding-chair-folio-infographics.js'), path.join(root, 'scripts', 'bedside-table-folio-infographics.js'));
let infographics = fs.readFileSync(path.join(root, 'scripts', 'bedside-table-folio-infographics.js'), 'utf8')
  .replaceAll('Folding Mechanism and Movement', 'Frame, Drawer and Hardware')
  .replaceAll('Seat and Back Slats', 'Top, Drawer and Storage')
  .replaceAll('folding-chair', 'bedside-table');
fs.writeFileSync(path.join(root, 'scripts', 'bedside-table-folio-infographics.js'), infographics);
