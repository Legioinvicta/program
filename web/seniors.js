const dataset = [
{"codi": "EMP0001", "a/b": "A", "carrec": "A", "centre": "Administració", "nom": "Ariadna", "cognoms": "Lucas Guzmán", "mobil": "722574445", "mail1": "ariadna@asencat.cat", "mail2": ""}, 
{"codi": "ASC0001", "a/b": "A", "carrec": "CE", "centre": "Centre A", "nom": "Francisco", "cognoms": "Turró Serrano", "mobil": "629199059", "mail1": "fturro@asencat.cat", "mail2": "fturro.asencat@gmail.com"}, 
{"codi": "ASC0002", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Jordi", "cognoms": "Moreta Munujos", "mobil": "639813452", "mail1": "jmoreta@asencat.cat", "mail2": "jordi.asencat@gmail.com"}, 
{"codi": "ASC0003", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Juan Carlos", "cognoms": "Oliver Fernández", "mobil": "609375792", "mail1": "jcoliver@asencat.cat", "mail2": "oliverjc@orange.es"}, 
{"codi": "ASC0004", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Andreu", "cognoms": "Pujadas Niño", "mobil": "659433015", "mail1": "apujadas@asencat.cat", "mail2": "andreu.asencat@gmail.com"}, 
{"codi": "ASC0005", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Vicenç", "cognoms": "Bombardó Vigueras", "mobil": "619291865", "mail1": "Baixa", "mail2": "vbombardov@gmail.com"}, 
{"codi": "ASC0006", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Felipe", "cognoms": "González Sánchez", "mobil": "679547649", "mail1": "fgonzalez@asencat.cat", "mail2": "felipe.asencat@gmail.com"}, 
{"codi": "ASC0007", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Juan Maria", "cognoms": "Anglada Rull", "mobil": "692189299", "mail1": "jmanglada@asencat.cat", "mail2": "ar.joan50@gmail.com"}, 
{"codi": "ASC0008", "a/b": "A", "carrec": "CE", "centre": "Osona", "nom": "Santiago", "cognoms": "Araño Güell", "mobil": "656602057", "mail1": "sarano@asencat.cat", "mail2": "santiagoarano.sao@gmail.com"}, 
{"codi": "ASC0009", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Xavier ", "cognoms": "Arxé  Rostoll", "mobil": "629352414", "mail1": "Baixa", "mail2": "xavier@arxe.com"}, 
{"codi": "ASC0010", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Jaime", "cognoms": "Barbará Adroher", "mobil": "696759449", "mail1": "jbarbara@asencat.cat", "mail2": "jbarbaraadroher@gmail.com"}, 
{"codi": "ASC0011", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Joaquim", "cognoms": "Barreira Sans", "mobil": "629790428", "mail1": "jbarreira@asencat.cat", "mail2": "jbarreirasans@gmail.com"}, 
{"codi": "ASC0012", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Maria Carme", "cognoms": "Becker  Schmidt", "mobil": "609306428", "mail1": "Baixa", "mail2": "mariucabecker@gmail.com"}, 
{"codi": "ASC0013", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Pedro", "cognoms": "Berges Domingo", "mobil": "630068069", "mail1": "pberges@asencat.cat", "mail2": "pere.berges@enginyers.net"}, 
{"codi": "ASC0014", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Jordi", "cognoms": "Boadas Vázquez", "mobil": "646425767", "mail1": "jboadas@asencat.cat", "mail2": "jordi.boadas@gmail.com"}, 
{"codi": "ASC0015", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Lluis", "cognoms": "Bonshoms Pau", "mobil": "608268350", "mail1": "llbonshoms@asencat.cat", "mail2": "lluisbhs@gmail.com"}, 
{"codi": "ASC0016", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Maria Teresa", "cognoms": "Boya Amenos", "mobil": "647650758", "mail1": "mboya@asencat.cat", "mail2": "MAYTE.BOYA@gmail.com"}, 
{"codi": "ASC0017", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Alberto", "cognoms": "Bricall Orellana", "mobil": "619709336", "mail1": "abricall@asencat.cat", "mail2": "albertbricall@hotmail.com"}, 
{"codi": "ASC0018", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Ramon", "cognoms": "Brugada Baviera", "mobil": "629449807", "mail1": "rbrugada@asencat.cat", "mail2": "ramon.asencat@gmail.com"}, 
{"codi": "ASC0019", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Pere", "cognoms": "Casals Navarro", "mobil": "606322528", "mail1": "pcasals@asencat.cat", "mail2": "pcasals937@gmail.com"}, 
{"codi": "ASC0020", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Pedro", "cognoms": "Castellet Grau", "mobil": "619720066", "mail1": "pcastellet@asencat.cat", "mail2": "pcastelletg@gmail.com"}, 
{"codi": "ASC0021", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "Jaime", "cognoms": "Castells Ganduxé", "mobil": "670116555", "mail1": "jcastells@asencat.cat", "mail2": "33castells@gmail.com"}, 
{"codi": "ASC0022", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Magí", "cognoms": "Castelltort Solé", "mobil": "649440114", "mail1": "mcastelltort@asencat.cat", "mail2": "magicastelltorts@gmail.com"}, 
{"codi": "ASC0023", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Daniel", "cognoms": "Cañardo Blasco", "mobil": "626652150", "mail1": "Baixa", "mail2": "danicanbla@gmail.com"}, 
{"codi": "ASC0024", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Antoni", "cognoms": "Cerrada Soler", "mobil": "606960067", "mail1": "acerrada@asencat.cat", "mail2": "toni.cerrada@gmail.com"}, 
{"codi": "ASC0025", "a/b": "A", "carrec": "CE", "centre": "Bcn. Centre 4", "nom": "Francisco Javier", "cognoms": "Chimenos Piró", "mobil": "699911911", "mail1": "jchimenos@asencat.cat", "mail2": "jchimenos@gmail.com"}, 
{"codi": "ASC0026", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Angel", "cognoms": "Codina Farrás", "mobil": "649994017", "mail1": "acodina@asencat.cat", "mail2": "acodinaf@gmail.com"}, 
{"codi": "ASC0027", "a/b": "A", "carrec": "GC", "centre": "Vallès Occ.", "nom": "Enrique", "cognoms": "Crusafont Costa", "mobil": "609724539", "mail1": "ecrusafont@asencat.cat", "mail2": "ecrusafont@anunzia.net"}, 
{"codi": "ASC0028", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Antonio", "cognoms": "Cumellas Roca", "mobil": "639378387", "mail1": "acumellas@asencat.cat", "mail2": "acumellas@secot.org"}, 
{"codi": "ASC0029", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Antonio", "cognoms": "de Haro Navarro", "mobil": "639757911", "mail1": "adeharo@asencat.cat", "mail2": "antoniodeharo@movistar.es"}, 
{"codi": "ASC0030", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Salvador", "cognoms": "Delgar Garçon", "mobil": "629311075", "mail1": "Baixa", "mail2": "salvador.delgar@gmail.com"}, 
{"codi": "ASC0031", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Jorge", "cognoms": "Escudé Jordi", "mobil": "669754175", "mail1": "jescude@asencat.cat", "mail2": "escujordi@gmail.com"}, 
{"codi": "ASC0032", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Marçal", "cognoms": "Farreras Ventura", "mobil": "689580152", "mail1": "mfarreras@asencat.cat", "mail2": "marcalfv@gmail.com"}, 
{"codi": "ASC0033", "a/b": "A", "carrec": "CE", "centre": "Bcn. Centre 5", "nom": "Vicenç", "cognoms": "Fernández Saguer", "mobil": "629948148", "mail1": "vfernandez@asencat.cat", "mail2": "fernandezvinyet@gmail.com"}, 
{"codi": "ASC0034", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Jordi", "cognoms": "Ferri Güell", "mobil": "629781333", "mail1": "jferri@asencat.cat", "mail2": "jfg50111@gmail.com"}, 
{"codi": "ASC0035", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Jose Luis", "cognoms": "Figueras Calderó", "mobil": "688398496", "mail1": "jlfigueras@asencat.cat", "mail2": "josel.figueras@gmail.com"}, 
{"codi": "ASC0036", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Jose Maria", "cognoms": "Font Feliu", "mobil": "600513006", "mail1": "jmfont@asencat.cat", "mail2": "nomeros@yahoo.es"}, 
{"codi": "ASC0037", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Josep", "cognoms": "Forroll Turró", "mobil": "667751198", "mail1": "jforroll@asencat.cat", "mail2": "j.forroll@forroll.com"}, 
{"codi": "ASC0038", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Joan", "cognoms": "Genestós Andreu", "mobil": "672665849", "mail1": "jgenestos@asencat.cat", "mail2": "genestos@hotmail.es"}, 
{"codi": "ASC0039", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Francisco", "cognoms": "Gil Valencia", "mobil": "670232871", "mail1": "fgil@asencat.cat", "mail2": "fgv1955@hotmail.com"}, 
{"codi": "ASC0040", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Juan", "cognoms": "Grasas Guisset", "mobil": "617338071", "mail1": "jgrasas@asencat.cat", "mail2": "jgrasasguisset@gmail.com"}, 
{"codi": "ASC0041", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Antonio", "cognoms": "Hilbert Frazzetta", "mobil": "620334178", "mail1": "ahilbert@asencat.cat", "mail2": "antoniohilbert@yahoo.es"}, 
{"codi": "ASC0042", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Ramón", "cognoms": "Imbert Ibañez", "mobil": "627647773", "mail1": "rimbert@asencat.cat", "mail2": "ramonimbert@hotmail.com"}, 
{"codi": "ASC0043", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Francisco", "cognoms": "Isern Crous", "mobil": "699475902", "mail1": "fisern@asencat.cat", "mail2": "gestiosona@gmail.com"}, 
{"codi": "ASC0044", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Pere", "cognoms": "Isus Montaner", "mobil": "646610649", "mail1": "Baixa", "mail2": "perell.isus@gmail.com"}, 
{"codi": "ASC0045", "a/b": "A", "carrec": "CE", "centre": "Vallès Or.", "nom": "José Maria", "cognoms": "Jané Altimiras", "mobil": "610256393", "mail1": "jmjane@asencat.cat", "mail2": "josemjane@telefonica.net"}, 
{"codi": "ASC0046", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Araceli", "cognoms": "Jover Fontanals", "mobil": "670532064", "mail1": "ajover@asencat.cat", "mail2": "aracelijover@gmail.com"}, 
{"codi": "ASC0047", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "José", "cognoms": "Jubert García", "mobil": "687755588", "mail1": "jjubert@asencat.cat", "mail2": "josep.jubert@enginyers.net"}, 
{"codi": "ASC0048", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "José", "cognoms": "López Lozano", "mobil": "639490805", "mail1": "jlopez@asencat.cat", "mail2": "jlopezlo23@gmail.com"}, 
{"codi": "ASC0049", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Alfonso Manuel", "cognoms": "López Salgueiro", "mobil": "696148619", "mail1": "alopez@asencat.cat", "mail2": "alsalgueiro56@gmail.com"}, 
{"codi": "ASC0050", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Llorenç", "cognoms": "Macías Dominguez", "mobil": "619237675", "mail1": "llmacias@asencat.cat", "mail2": "macias.borras@gmail.com"}, 
{"codi": "ASC0051", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Gustavo", "cognoms": "Marquès Granero", "mobil": "622230656", "mail1": "gmarques@asencat.cat", "mail2": "gusmarques@me.com"}, 
{"codi": "ASC0052", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Gabriel", "cognoms": "Martínez Deschamps", "mobil": "659665616", "mail1": "Baixa", "mail2": "gmdeschamps@gmail.com"}, 
{"codi": "ASC0053", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "José Maria", "cognoms": "Martínez Figuerola", "mobil": "619419844", "mail1": "jmmartinez@asencat.cat", "mail2": "josemfiguerola@gmail.com"}, 
{"codi": "ASC0054", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Manel", "cognoms": "Marquès Sánchez", "mobil": "607186555", "mail1": "mmarques@asencat.cat", "mail2": "marquessanchezmanel@gmail.com"}, 
{"codi": "ASC0055", "a/b": "A", "carrec": "CE", "centre": "Bcn. Centre 1", "nom": "Joan", "cognoms": "Mercadal Sallent", "mobil": "609667738", "mail1": "jmercadal@asencat.cat", "mail2": "mercadal.jan@gmail.com"}, 
{"codi": "ASC0056", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Manuel", "cognoms": "Mir Rocabruna", "mobil": "606387450", "mail1": "mmir@asencat.cat", "mail2": "mir2000@telefonica.net"}, 
{"codi": "ASC0057", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Jordi", "cognoms": "Monteys Viñals", "mobil": "629333179", "mail1": "jmonteys@asencat.cat", "mail2": "jordi@monteys.net"}, 
{"codi": "ASC0058", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "Alejandro", "cognoms": "Muñoz Roquet", "mobil": "650233342", "mail1": "amunoz@asencat.cat", "mail2": "alex@formacionempresa.es"}, 
{"codi": "ASC0059", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "Juan Pablo", "cognoms": "Muñoz Aguilar", "mobil": "619268628", "mail1": "jpmunoz@asencat.cat", "mail2": "jp.muag@gmail.com"}, 
{"codi": "ASC0060", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Gerard", "cognoms": "Oliveira Roldan", "mobil": "649749159", "mail1": "goliveira@asencat.cat", "mail2": "gerard.or@outlook.com"}, 
{"codi": "ASC0061", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Juan", "cognoms": "Palou Serra", "mobil": "608200794", "mail1": "jpalous@asencat.cat", "mail2": "joanrorra@gmail.com"}, 
{"codi": "ASC0062", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Josep", "cognoms": "Palou Brau", "mobil": "610034031", "mail1": "jpalou@asencat.cat", "mail2": "jpalou@adria.cat"}, 
{"codi": "ASC0063", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Maria Isabel", "cognoms": "Peretó García", "mobil": "650753304", "mail1": "ipereto@asencat.cat", "mail2": "isabel.pereto@gmail.com"}, 
{"codi": "ASC0064", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "José", "cognoms": "Pérez Gimenez", "mobil": "609712064", "mail1": "jperez@asencat.cat", "mail2": "merineus@gmail.com"}, 
{"codi": "ASC0065", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Eduardo", "cognoms": "Pocorull Viñallonga", "mobil": "687522210", "mail1": "epocorull@asencat.cat", "mail2": "epocorull@telefonica.net"}, 
{"codi": "ASC0066", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Santiago", "cognoms": "Ponseti Bosch", "mobil": "608991155", "mail1": "sponseti@asencat.cat", "mail2": "santi.ponseti@gmail.com"}, 
{"codi": "ASC0067", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Josep Mª", "cognoms": "Prat Canet", "mobil": "649381331", "mail1": "jmprat@asencat.cat", "mail2": "jmpratcanet@gmail.com"}, 
{"codi": "ASC0068", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Modesto", "cognoms": "Prenafeta Pastor", "mobil": "609872763", "mail1": "Baixa", "mail2": "modestprenafeta1948@hotmail.com"}, 
{"codi": "ASC0069", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Amado José", "cognoms": "Pueyo Abadías", "mobil": "608026868", "mail1": "apueyo@asencat.cat", "mail2": "amadojpueyo@gmail.com"}, 
{"codi": "ASC0070", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Pedro", "cognoms": "Puigdellívol Llobet", "mobil": "649108636", "mail1": "ppuigdellivol@asencat.cat", "mail2": "puigdelliv@hotmail.com"}, 
{"codi": "ASC0071", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Ricard ", "cognoms": "Queija  Royo", "mobil": "636470570", "mail1": "rqueija@asencat.cat", "mail2": "rqueija1950@gmail.com"}, 
{"codi": "ASC0072", "a/b": "A", "carrec": "CE", "centre": "Bcn. Centre 2", "nom": "Francisco", "cognoms": "Reig Juan", "mobil": "619735254", "mail1": "freig@asencat.cat", "mail2": "franreju@gmail.com"}, 
{"codi": "ASC0073", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Francisco", "cognoms": "Rodés Ribas", "mobil": "629785162", "mail1": "frodes@asencat.cat", "mail2": "francisco.rodes@telefonica.net"}, 
{"codi": "ASC0074", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Manuel", "cognoms": "Rojas Martín", "mobil": "639338561", "mail1": "Baixa", "mail2": "manuelrojas.mr@gmail.com"}, 
{"codi": "ASC0075", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Adolfo", "cognoms": "Romagosa Rocamora", "mobil": "607260966", "mail1": "aromagosa@asencat.cat", "mail2": "adolfo.romagosa@gmail.com"}, 
{"codi": "ASC0076", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Pere ", "cognoms": "Romero  Dalmau", "mobil": "609557961", "mail1": "promero@asencat.cat", "mail2": "pereromero@telefonica.net"}, 
{"codi": "ASC0077", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Josep", "cognoms": "Rovira Montaña", "mobil": "629709094", "mail1": "jrovira@asencat.cat", "mail2": "jrmanins@gmail.com "}, 
{"codi": "ASC0078", "a/b": "A", "carrec": "GC", "centre": "Vallès Occ.", "nom": "Joaquin", "cognoms": "Sanchez Lopez", "mobil": "610594205", "mail1": "jsanchez@asencat.cat", "mail2": "joaquinsanchezlo@yahoo.es"}, 
{"codi": "ASC0079", "a/b": "A", "carrec": "CE", "centre": "Vallès Occ.", "nom": "Luis", "cognoms": "Santos López", "mobil": "639307440", "mail1": "lsantos@asencat.cat", "mail2": "lsantos.asencat@gmail.com"}, 
{"codi": "ASC0080", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Joan", "cognoms": "Sellés Mestres", "mobil": "607248150", "mail1": "jselles@asencat.cat", "mail2": "sellesj@gmail.com"}, 
{"codi": "ASC0081", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Miguel", "cognoms": "Serra Piernau", "mobil": "650119124", "mail1": "mserra@asencat.cat", "mail2": "m.serrapie@gmail.com"}, 
{"codi": "ASC0082", "a/b": "A", "carrec": "GC", "centre": "Osona", "nom": "Vicente", "cognoms": "Sicilia Zafra", "mobil": "656633056", "mail1": "vsicilia@asencat.cat", "mail2": "SICILIAVIC@gmail.com"}, 
{"codi": "ASC0083", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Juan", "cognoms": "Solé Monte", "mobil": "670378207", "mail1": "jsole@asencat.cat", "mail2": "joansole49@gmail.com"}, 
{"codi": "ASC0084", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Eduard", "cognoms": "Sumoy Bolufer", "mobil": "639134007", "mail1": "esumoy@asencat.cat", "mail2": "eduardsumoy@gmail.com"}, 
{"codi": "ASC0085", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "Ignasi", "cognoms": "Torres Godori", "mobil": "690312981", "mail1": "itorres@asencat.cat", "mail2": "ignasitgodori@gmail.com"}, 
{"codi": "ASC0086", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Antoni", "cognoms": "Traveria Morató", "mobil": "619745979", "mail1": "atraveria@asencat.cat", "mail2": "atraveria@traveria.cat"}, 
{"codi": "ASC0087", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Maria Lluisa", "cognoms": "Haro Gómez", "mobil": "606805657", "mail1": "mharo@asencat.cat", "mail2": "mlharog@gmail.com"}, 
{"codi": "ASC0088", "a/b": "A", "carrec": "GC", "centre": "Vallès Occ.", "nom": "Artur", "cognoms": "Moix Casas", "mobil": "616478644", "mail1": "amoix@asencat.cat", "mail2": "arturmoix@gmail.com"}, 
{"codi": "ASC0089", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Ramon", "cognoms": "Prats  Aige", "mobil": "674641541", "mail1": "rprats@asencat.cat", "mail2": "rmnprts4@gmail.com"}, 
{"codi": "ASC0090", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Antoni", "cognoms": "Lucas  Marmol", "mobil": "629251121", "mail1": "alucas@asencat.cat", "mail2": "alucaseyc@gmail.com"}, 
{"codi": "ASC0091", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Ignacio", "cognoms": "Feliu Bohera", "mobil": "695857622", "mail1": "Baixa", "mail2": "ifeliu@feliu.es"}, 
{"codi": "ASC0092", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Carles ", "cognoms": "Heredia  Sancho", "mobil": "696640871", "mail1": "cheredia@asencat.cat", "mail2": "carlosheredia9@gmail.com"}, 
{"codi": "ASC0093", "a/b": "A", "carrec": "CE", "centre": "Berguedà", "nom": "Francesc Xavier ", "cognoms": "Francàs Bartes", "mobil": "689781493", "mail1": "xfrancas@asencat.cat", "mail2": "fxfrancas@hotmail.com"}, 
{"codi": "ASC0094", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Rafel", "cognoms": "Puig Menen", "mobil": "650490001", "mail1": "Baixa", "mail2": "puigrafel@gmail.com"}, 
{"codi": "ASC0095", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Miquel", "cognoms": "Serra  Farrus", "mobil": "645186645", "mail1": "mserraf@asencat.cat", "mail2": " miquel.serra@miquelserraf.com"}, 
{"codi": "ASC0096", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 1", "nom": "Cesar", "cognoms": "Canut Bartra", "mobil": "607116693", "mail1": "ccanut@asencat.cat", "mail2": "cesarcanut@aiqs.es"}, 
{"codi": "ASC0097", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Jaume", "cognoms": "Torrents Pagan", "mobil": "660712752", "mail1": "Baixa", "mail2": "jtorrents@sogemedi.com"}, 
{"codi": "ASC0098", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Josep Maria", "cognoms": "Orduña Ponti", "mobil": "609379676", "mail1": "Baixa", "mail2": "jmordunaponti@yahoo.es"}, 
{"codi": "ASC0099", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Angels", "cognoms": "Hidalgo de la Torre", "mobil": "616882279", "mail1": "ahidalgo@aencat.cat", "mail2": "angels@angelshidalgo.com"}, 
{"codi": "ASC0100", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Gemma", "cognoms": "Aviñó Padial", "mobil": "677450072", "mail1": "gavino@asencat.cat", "mail2": "gemmaavino@gmail.com"}, 
{"codi": "ASC0101", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Eva", "cognoms": "Salud Salud", "mobil": "609026731", "mail1": "esalud@asencat.cat", "mail2": "emsaludsalud@gmail.com"}, 
{"codi": "ASC0102", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Josep Maria", "cognoms": "Grima Rosell", "mobil": "689402302", "mail1": "jmgrima@asencat.cat", "mail2": "josegrimm@yahoo.com"}, 
{"codi": "ASC0103", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Ramon Maria", "cognoms": "Palou Brau", "mobil": "650759280", "mail1": "rpalou@asencat.cat", "mail2": "ramon.palou53@gmail.com"}, 
{"codi": "ASC0104", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Miquel", "cognoms": "Pi Costa", "mobil": "650954502", "mail1": "Baixa", "mail2": "miquel@picosta.com"}, 
{"codi": "ASC0105", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Rafel", "cognoms": "Viladrosa Albareda", "mobil": "646944365", "mail1": "rviladrosa@asencat.cat", "mail2": "rafelviladrosa@msn.com"}, 
{"codi": "ASC0106", "a/b": "A", "carrec": "CE", "centre": "Maresme", "nom": "Jordi", "cognoms": "Berni Blanch", "mobil": "636980096", "mail1": "jberni@asencat.cat", "mail2": "berni.jordi@gmail.com"}, 
{"codi": "ASC0107", "a/b": "A", "carrec": "GC", "centre": "Vallès Occ.", "nom": "Rafel", "cognoms": "Santasusagna Ferret", "mobil": "673866673", "mail1": "rsantasusagna@asencat.cat", "mail2": "rsantasusagna@gmail.com"}, 
{"codi": "ASC0108", "a/b": "A", "carrec": "GC", "centre": "Vallès Occ.", "nom": "Juan Carlos", "cognoms": "Rodriguez Mondelo", "mobil": "609585056", "mail1": "jcrodriguez@asencat.cat", "mail2": "juancarlosrodriguezmondelo@gmail.com"}, 
{"codi": "ASC0109", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Laura", "cognoms": "Rosillo Cascante", "mobil": "619058433", "mail1": "lrosillo@asencat.cat", "mail2": "lrosilloc@gmail.com"}, 
{"codi": "ASC0110", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 4", "nom": "Miquel", "cognoms": "Segura Xarto", "mobil": "618542419", "mail1": "msegura@asencat.cat", "mail2": "miquel.segura55@gmail.com"}, 
{"codi": "ASC0111", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Antoni", "cognoms": "Pallès Soler", "mobil": "629738390", "mail1": "apalles@asencat.cat", "mail2": "antonipalles@outlook.com"}, 
{"codi": "ASC0112", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "Feliu", "cognoms": "Monés Pla", "mobil": "619243410", "mail1": "fmones@asencat.cat", "mail2": "feliumones@gmail.com"}, 
{"codi": "ASC0113", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Josep Maria", "cognoms": "Ollé Solé", "mobil": "647563174", "mail1": "Baixa", "mail2": "calxiscu@gmail.com"}, 
{"codi": "ASC0114", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Mario Luis Roque", "cognoms": "Barea Pernaut", "mobil": "637504254", "mail1": "Baixa", "mail2": "mlrbp@hotmail.com"}, 
{"codi": "ASC0115", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Agustí", "cognoms": "Ferrer Sancho", "mobil": "660965833", "mail1": "aferrer@asencat.cat", "mail2": "agustiferrersancho@outlook.com"}, 
{"codi": "ASC0116", "a/b": "A", "carrec": "CE", "centre": "Bcn. Centre 3", "nom": "Jaume", "cognoms": "Romagosa Soler", "mobil": "615904137", "mail1": "jromagosa@asencat.cat", "mail2": "jaime.romagosa@icloud.com"}, 
{"codi": "ASC0117", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "Sebastià", "cognoms": "Sala Pascual", "mobil": "687561340", "mail1": "ssala@asencat.cat", "mail2": "tianet.sala@gmail.com"}, 
{"codi": "ASC0118", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 5", "nom": "Ana Maria", "cognoms": "Rovira Usano", "mobil": "639357788", "mail1": "amrovira@asencat.cat", "mail2": "amrovira@gmail.com"}, 
{"codi": "ASC0119", "a/b": "A", "carrec": "GC", "centre": "Berguedà", "nom": "Josep", "cognoms": "Colomer Orriols", "mobil": "626552343", "mail1": "jcolomer@asencat.cat", "mail2": "jcolomerorriols@gmail.com"}, 
{"codi": "ASC0120", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Ramon", "cognoms": "Picarin Reula", "mobil": "639791389", "mail1": "rpicarin@asencat.cat", "mail2": "rpicarinr@gmail.com"}, 
{"codi": "ASC0121", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Juan Luis", "cognoms": "Abad Marcos", "mobil": "617386233", "mail1": "jabad@asencat.cat", "mail2": "joan@ecofincloud.com"}, 
{"codi": "ASC0122", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Ester", "cognoms": "Pinós Cavallé", "mobil": "649957956", "mail1": "epinos@asencat.cat", "mail2": "estherpc56@gmail.com"}, 
{"codi": "ASC0123", "a/b": "A", "carrec": "GC", "centre": "Vallès Or.", "nom": "José Manuel", "cognoms": "Romero Sánchez", "mobil": "677441098", "mail1": "jmromero@asencat.cat", "mail2": "romerosanchez55@hotmail.com"},
{"codi": "ASC0124", "a/b": "B", "carrec": "GC", "centre": "------", "nom": "Josep Maria", "cognoms": "Martí Laforga", "mobil": "646018736", "mail1": "Baixa", "mail2": "jm.marti.001@gmail.com"},
{"codi": "ASC0125", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 2", "nom": "Manuel", "cognoms": "Julián Ibáñez", "mobil": "682642449", "mail1": "mjulian@asencat.cat", "mail2": "manuel.julian.mj@gmail.com"},
{"codi": "ASC0126", "a/b": "A", "carrec": "GC", "centre": "Bcn. Centre 3", "nom": "Conrad", "cognoms": "Galofré Garriga", "mobil": "609121029", "mail1": "cgalofre@asencat.cat", "mail2": "conrad.galofre@telefonica.net"},
{"codi": "ASC0127", "a/b": "A", "carrec": "GC", "centre": "Maresme", "nom": "Jordi", "cognoms": "Senespleda Raventos", "mobil": "619742116", "mail1": "jsenespelda@asencat.cat", "mail2": "jordisenespleda@gmail.com"},
{"codi": "ASC0128", "a/b": "A", "carrec": "GC", "centre": "Centre A", "nom": "Ana María", "cognoms": "Martin Ramos", "mobil": "626525207", "mail1": "amartin@asencat.cat", "mail2": "martin.ana.mria@gmail.com"}
];
