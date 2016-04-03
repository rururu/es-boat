(defproject proframes "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [protege "3.5.0"]
                 [protege/standard-extensions "3.5.0"]
                 [protege/looks "3.5.0"]
                 [protege/unicode_panel "3.5.0"]
                 [protege/JGo "3.5.0"]
                 [protege/JGoLayout "3.5.0"]
                 [protege/ClojureTab "1.5.0"]
                 [rete "5.2.4-SNAPSHOT"]]
  :javac-options ["-target" "1.6" "-source" "1.6" "-Xlint:-options"]
  :repositories {"local" ~(str (.toURI (java.io.File. "repo")))}
  :aot [proframes.core]
  :main proframes.core)
