import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Lösung } from "@/components/Lösung";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import {
    Blockquote,
    Divider,
    Image,
    List,
    ListItem,
    Text,
    Title,
} from "@mantine/core";
import NextImage from "next/image";

export default function Prismen() {
    return (
        <div>
            <SuspenseCheckableHeading title="Das Prisma">
                Prismen kennst du vielleicht schon aus dem Physikunterricht. Mit
                ihnen kann man zeigen, dass weißes Licht tatsächlich aus allen
                Farben des Regenbogens besteht – schau dir das Beispiel in dem
                Bild an! Solche Prismen sind aus Glas und meistens dreieckig.
                <Divider my={"md"} />
                Das Wort „Prisma“ bezeichnet aber nicht nur solche Glasgeräte,
                sondern im allgemeinen alle Körper mit dieser Form. Mathematisch
                interessiert uns daher weniger die Lichtbrechung, sondern viel
                mehr, was die Form so besonders macht! Wie könnte man es aus
                Papier falten? Welches Volumen hat ein Prisma? Und sind Prismen
                überhaupt immer dreieckig?
            </SuspenseCheckableHeading>
            <Image
                h={400}
                fit="contain"
                component={NextImage}
                src="/prisma1.jpg"
                width={3499}
                height={5249}
                alt="Ein Prisma, an dem weißes Licht in einem Regenbogen gebrochen wird."
            />

            <SuspenseCheckableHeading title="Definition eines Prismas">
                Wir nehmen eine Grundfläche mit beliebiger, aber eckiger Form:
                Ein sogenanntes <b>n-Eck</b>. Nehmen wir seine Fläche und ziehen
                sie in den Raum hinein, so entsteht ein Körper. Diesen nennen
                wir <b>Prisma</b>.
            </SuspenseCheckableHeading>

            <CheckableBlockquote
                icon="IconHelpHexagonFilled"
                title="Aufgabe: Prismen im Alltag"
            >
                Suche in deinem Zimmer Objekte, die ein Prisma sind und bringe
                sie in den Unterricht mit. Was für eine Form hat die
                Grundfläche, aus der das Prisma „gezogen" wird?
            </CheckableBlockquote>

            <CheckableBlockquote icon="IconInfoHexagonFilled" title="Aha! 1">
                {" "}
                Ein Prisma hat also nicht immer eine dreieckige Grundseite,
                sondern kann jede eckige Form als Grundseite haben!
                Dementsprechend ist also auch ein <b>Würfel</b> oder ein{" "}
                <b>Quader</b> ein Prisma.{" "}
            </CheckableBlockquote>

            <CheckableHeading title="Schrägbilder">
                Aus der Orientierungsstufe kennst du bereits das{" "}
                <b>Schrägbild</b> eines Quaders. Das sollte ungefähr so aussehen
                wie in dem Bild.
                <Image
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/QuaderSchrägbild@2x.png"
                    width={1802}
                    height={1200}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
                Verdeckte Kanten werden also mit einer gestrichelten Linie
                angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider my={"md"} />
                Zeichnen wir mal ein Schrägbild von dem dreieckigen Prisma oben.
                <List type="ordered">
                    <ListItem>
                        {" "}
                        Zuerst zeichnen wir dazu die dreieckige Grundfläche.
                        Weil sie auf dem „Boden“ liegt, wird sie etwas nach
                        rechts-hinten verzerrt. Die beiden nach hinten zeigenden
                        Kanten werden verdeckt sein, also zeichnen wir sie
                        bereits gestrichelt.
                    </ListItem>
                    <ListItem>
                        Als nächstes ziehen wir die drei Kanten von den Ecken
                        aus nach oben. Auch hier gilt: Die hinterste Kante ist
                        verdeckt und wird deshalb gestrichelt gezeichnet.{" "}
                    </ListItem>
                    <ListItem>
                        Im letzten Schritt verbinden wir die Eckpunkte der
                        oberen Fläche. Sie sollte genau die gleiche Form wie die
                        untere Fläche haben!{" "}
                    </ListItem>
                </List>
                <Image
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/PrismaSchrägbildEntstehung@2x.png"
                    width={2402}
                    height={1200}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
            </CheckableHeading>

            <CheckableBlockquote
                icon="IconHelpHexagonFilled"
                title="Aufgabe: Schrägbilder"
            >
                Vervollständige die folgenden Schrägbilder in deinem Heft:
                <Image
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/SchrägbilderVervollständigenAufgabe@2x.png"
                    width={2402}
                    height={1200}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
                <CheckableHeading
                    title="Lösung"
                    id="Lösung-Schrägbilder"
                    titleOrder={2}
                >
                    <Lösung>
                        <Image
                            h={300}
                            fit="contain"
                            component={NextImage}
                            src="/SchrägbilderVervollständigenLösung@2x.png"
                            width={2402}
                            height={1200}
                            alt="Schrägbild eines Quaders auf kariertem Papier."
                        />
                    </Lösung>
                </CheckableHeading>
            </CheckableBlockquote>

            <CheckableHeading title="Netze von Prismen">
                Geometrische Körper kann man in Netze zerlegen. Vielleicht hast
                du schonmal ein Würfelnetz aufgemalt, um daraus einen
                Spielwürfel zu basteln? Genau das geht auch bei Prismen.
                <Image
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/NetzWürfel.jpg"
                    width={6000}
                    height={4000}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
            </CheckableHeading>
        </div>
    );
}
